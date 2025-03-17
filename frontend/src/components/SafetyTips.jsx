import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
export function SafetyTipsAndCommunityResources() {
  const [openTip, setOpenTip] = useState(null);

  const safetyTips = [
    {
      icon: "🔥",
      title: "Avoid Open Flames",
      description: "Keep flammable objects away from fire sources.",
    },
    {
      icon: "⚡",
      title: "Check Electrical Wiring",
      description: "Replace frayed wires to prevent electrical fires.",
    },
    {
      icon: "🧯",
      title: "Keep Fire Extinguishers Ready",
      description: "Ensure extinguishers are accessible and functional.",
    },
    {
      icon: "🚪",
      title: "Plan Emergency Exits",
      description: "Have a clear evacuation plan and practice it regularly.",
    },
  ];
  const evacuationSteps = [
    {
      icon: "🔔",
      title: "Stay Alert",
      description: "Listen for alarms and emergency notifications.",
    },
    {
      icon: "🚪",
      title: "Find the Nearest Exit",
      description: "Locate the nearest emergency exit and proceed calmly.",
    },
    {
      icon: "🧍‍♂️➡️",
      title: "Avoid Elevators",
      description: "Always use stairs instead of elevators in case of fire.",
    },
    {
      icon: "🤲",
      title: "Help Others",
      description: "Assist children, elderly, or those in need.",
    },
    {
      icon: "📍",
      title: "Meet at Assembly Point",
      description: "Gather at the designated safe zone outside the building.",
    },
  ];
  const firstAidSteps = [
    {
      icon: "🔥",
      title: "Minor Burns",
      description: "Cool the burn with running water for 10 minutes.",
    },
    {
      icon: "💨",
      title: "Smoke Inhalation",
      description: "Move to fresh air immediately and take deep breaths.",
    },
    {
      icon: "🚑",
      title: "Severe Burns",
      description: "Cover with a clean cloth and seek medical help.",
    },
    {
      icon: "💊",
      title: "Treat Shock",
      description: "Keep the person lying down with feet elevated.",
    },
  ];
  const resources = [
    {
      icon: "📞",
      title: "Emergency Helpline",
      description: "Call 101 for immediate fire emergencies.",
    },
    {
      icon: "🏠",
      title: "Local Fire Department",
      description: "Find your nearest fire station for assistance.",
    },
    {
      icon: "📚",
      title: "Fire Safety Workshops",
      description: "Join community sessions on fire prevention & safety.",
    },
    {
      icon: "🤝",
      title: "Support Groups",
      description: "Connect with people affected by fire incidents.",
    },
  ];
  const tips = [
    {
      icon: "🚫",
      title: "Avoid Open Flames",
      description:
        "Never leave candles, gas stoves, or bonfires unattended. Ensure flammable materials such as curtains, paper, or furniture are at a safe distance from open flames.",
    },
    {
      icon: "⚡",
      title: "Check Electrical Wiring",
      description:
        "Regularly inspect your home’s electrical wiring for damage. Replace frayed wires, avoid overloading sockets, and unplug appliances when not in use to prevent electrical fires.",
    },
    {
      icon: "🧯",
      title: "Keep Fire Extinguishers Ready",
      description:
        "Ensure fire extinguishers are easily accessible in kitchens, offices, and fire-prone areas. Learn how to operate them correctly and check for expiration dates regularly.",
    },
    {
      icon: "🚪",
      title: "Have an Emergency Exit Plan",
      description:
        "Plan and practice multiple escape routes with your family or coworkers. Ensure all exits are clear and easy to access in case of an emergency evacuation.",
    },
    {
      icon: "🔔",
      title: "Install Smoke Alarms",
      description:
        "Place smoke alarms in every room and hallway. Test them monthly and replace batteries annually to ensure they function properly during emergencies.",
    },
    {
      icon: "🌊",
      title: "Store Flammable Liquids Safely",
      description:
        "Keep gasoline, cleaning agents, and other flammable substances in well-ventilated areas away from heat sources to reduce the risk of combustion.",
    },
  ];
  const preparednessSteps = [
    {
      icon: "📋",
      title: "Create a Fire Safety Plan",
      description:
        "Make sure everyone in your home or office knows the escape routes, meeting points, and emergency contacts.",
    },
    {
      icon: "🔥",
      title: "Conduct Fire Drills",
      description:
        "Practice fire evacuation drills at least twice a year to ensure everyone knows how to react quickly.",
    },
    {
      icon: "🎒",
      title: "Prepare an Emergency Kit",
      description:
        "Include essentials like a flashlight, first-aid supplies, bottled water, and important documents.",
    },
    {
      icon: "🚪",
      title: "Identify Safe Exit Points",
      description:
        "Ensure every room has at least two possible exits, like doors or windows, in case of fire.",
    },
    {
      icon: "📞",
      title: "Know Emergency Contacts",
      description:
        "Save local fire department and emergency numbers in your phone and post them where everyone can see.",
    },
  ];
  const equipmentList = [
    {
      icon: "🧯",
      title: "Fire Extinguishers",
      description:
        "Use the PASS method: Pull the pin, Aim at the base, Squeeze the handle, and Sweep side to side.",
    },
    {
      icon: "🚨",
      title: "Smoke Detectors",
      description:
        "Install smoke detectors in every room, test them monthly, and replace batteries every 6 months.",
    },
    {
      icon: "🔥",
      title: "Fire Blankets",
      description:
        "Use a fire blanket to smother small fires, especially for kitchen or electrical fires.",
    },
    {
      icon: "💧",
      title: "Sprinkler Systems",
      description:
        "Automatic sprinklers can help contain fires before they spread, reducing damage and danger.",
    },
    {
      icon: "📢",
      title: "Fire Alarms",
      description:
        "Ensure fire alarms are installed in key locations and have a loud sound for quick alerts.",
    },
  ];

  return (
    <>
      <header className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-6 px-8 text-center rounded-lg shadow-lg">
        <Link className="" to="/dashboard">
          <i class="fa-solid fa-xmark rounded-4xl border px-1.5 py-1 absolute left-97/100 bottom-94/100"></i>
        </Link>
        <h1 className="text-3xl font-bold">
          🔥 Fire Safety & Community Resources
        </h1>

        <p className="mt-2 text-lg text-orange-200">
          Stay informed and prepared with essential fire safety guides,
          evacuation plans, and emergency contacts.
        </p>

        {/* View All Resources Button */}
        <div className="mt-4">
          <a
            href="/download"
            className="inline-block bg-white text-red-500 font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition"
          >
            📂 Download Resources
          </a>
        </div>
      </header>

      <div className="">
        <section className="bg-white p-6 rounded-lg mt-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            🛑 Fire Safety Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyTips.map((tip, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-100 p-4 rounded-md shadow-sm border border-gray-300"
              >
                <span className="text-3xl">{tip.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">{tip.title}</p>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white p-6 rounded-lg mt-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            🚪 Evacuation Plans
          </h2>

          <div className="space-y-4">
            {evacuationSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-100 p-4 rounded-md shadow-sm border border-gray-300"
              >
                <span className="text-3xl">{step.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">{step.title}</p>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white p-6  rounded-lg mt-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            🏥 First-Aid Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {firstAidSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-100 p-4 rounded-md shadow-sm border border-gray-300"
              >
                <span className="text-3xl">{step.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">{step.title}</p>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white p-6  rounded-lg mt-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            🌍 Community Support & Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-100 p-4 rounded-md shadow-sm border border-gray-300"
              >
                <span className="text-3xl">{resource.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">
                    {resource.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white p-6  rounded-lg mt-6 ">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            🔥 Fire Prevention Tips & Best Practices
          </h2>

          <div className="space-y-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-sm border border-gray-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{tip.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{tip.title}</p>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white p-6 mt-6 rounded-lg ">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            🚨 Emergency Preparedness Plan
          </h2>

          <div className="space-y-4">
            {preparednessSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-sm border border-gray-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{step.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white p-6  rounded-lg mt-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            🛑 How to Use Fire Safety Equipment
          </h2>

          <div className="space-y-4">
            {equipmentList.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-sm border border-gray-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
export function DownloadResources() {
  const downloadresources = [
    { name: "Fire Escape Plan", type: "pdf", link: "#" },
    { name: "Home Safety Checklist", type: "pdf", link: "#" },
    { name: "Emergency Contact Sheet", type: "doc", link: "#" },
    { name: "Fire Drill Guide", type: "pdf", link: "#" },
    { name: "Fire Safety Manual", type: "pdf", link: "#" },
  ];
  const fileIcons = {
    pdf: "📄",
    doc: "📑",
  };
  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full border border-gray-200">
      {/* Header */}
      <div className="flex justify-between">

      <h2 className="text-lg font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-4 rounded-md inline-block">
        📂 Resources & Downloads
      </h2>
      <Link className="" to="/tips">
          <i class="fa-solid fa-xmark rounded-4xl border px-1.5 py-1 "></i>
        </Link>
      </div>

      {/* List of Resources */}
      <ul className="mt-4 space-y-3">
        {downloadresources.map((resource, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{fileIcons[resource.type]}</span>
              <p className="font-semibold text-gray-800">{resource.name}</p>
            </div>
            <a
              href={resource.link}
              className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs hover:bg-blue-600 transition"
            >
              ⬇ Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
