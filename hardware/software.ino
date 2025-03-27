#include <Wire.h>
#include <WiFi.h>
#include <FirebaseESP32.h>
#include <Adafruit_AHTX0.h>

#define WIFI_SSID "Please_Enter_SSID"
#define WIFI_PASSWORD "Please_Enter_PSWD"
#define FIREBASE_HOST "URL_project.firebaseio.com"
#define FIREBASE_AUTH "Project_API"

#define MQ_PIN 35     
#define IR_PIN 32     

Adafruit_AHTX0 aht;
FirebaseData firebaseData;
unsigned long lastSentTime = 0;
const unsigned long interval = 60000; // 1 minute

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" Connected!");

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  Wire.begin(21, 22);

  if (!aht.begin()) {
    Serial.println("Could not find AHT10! Check wiring.");
    while (1) delay(10);
  }

  pinMode(IR_PIN, INPUT);
  analogReadResolution(12);
}

void loop() {
  sensors_event_t humidity, temp;
  aht.getEvent(&humidity, &temp);

  int gas = analogRead(MQ_PIN);
  int flame = digitalRead(IR_PIN);

  Serial.print("Temperature: ");
  Serial.print(temp.temperature);
  Serial.println(" °C");

  Serial.print("Humidity: ");
  Serial.print(humidity.relative_humidity);
  Serial.println(" %");
  Serial.print("Gas Reading: ");
  Serial.println(gas);

  if (flame == HIGH) {
    Serial.println("Flame NOT Detected");
  } else {
    Serial.println("Flame Detected!");
    sendDataToFirebase(temp.temperature, humidity.relative_humidity, gas, flame);
  }

  if (millis() - lastSentTime >= interval) {
    sendDataToFirebase(temp.temperature, humidity.relative_humidity, gas, flame);
    lastSentTime = millis();
  }

  Serial.println("-----------------------------");
  delay(1000);
}

void sendDataToFirebase(float temperature, float humidity, int gas, int flame) {
  String path = "/sensor_data/" + String(millis());
  FirebaseJson json;
  json.set("temperature", temperature);
  json.set("humidity", humidity);
  json.set("gas", gas);
  json.set("flame", flame);

  if (Firebase.pushJSON(firebaseData, path, json)) {
    Serial.println("Data sent to Firebase");
  } else {
    Serial.print("Firebase Error: ");
    Serial.println(firebaseData.errorReason());
  }
}
