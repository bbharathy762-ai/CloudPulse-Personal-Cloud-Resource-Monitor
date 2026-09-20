const $ = id => document.getElementById(id);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDashboard() {
  const cpu = randomInt(35, 78);
  const memory = randomInt(42, 84);
  const storage = randomInt(28, 68);
  const instances = randomInt(6, 14);

  $("cpu").textContent = cpu;
  $("memory").textContent = memory;
  $("storage").textContent = storage;
  $("instances").textContent = instances;

  $("cpuBar").style.width = cpu + "%";
  $("memoryBar").style.width = memory + "%";
  $("storageBar").style.width = storage + "%";

  const now = new Date();
  $("lastUpdated").textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const bars = $("chartBars");
  bars.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    const bar = document.createElement("div");
    bar.className = "chart-bar";
    bar.style.height = randomInt(30, 92) + "%";
    bars.appendChild(bar);
  }
}

$("refreshBtn").addEventListener("click", updateDashboard);
updateDashboard();
