const checkoutContainer = document.getElementById("checkoutContainer");
const checkoutBtn = document.getElementById("checkoutBtn");
const itemInput = document.getElementById("itemInput");

const counters = [
  { id: 1, queue: [] },
  { id: 2, queue: [] },
  { id: 3, queue: [] },
];

let selectedCounterIndex = null;

function renderCounters() {
  checkoutContainer.innerHTML = "";

  counters.forEach((counter, i) => {
    const totalItems = counter.queue.reduce((sum, val) => sum + val, 0);
    const card = document.createElement("div");

    const borderClass =
      i === selectedCounterIndex
        ? "border-blue-500 ring-2 ring-blue-300"
        : "border-gray-200";

    card.className = `cursor-pointer bg-white rounded-lg p-5 shadow-lg border ${borderClass}`;

    card.innerHTML = `
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-gray-800">Counter ${i + 1}</h2>
        <span class="text-sm text-gray-600 flex items-center gap-1">
          <i class="ph ph-user"></i> ${counter.queue.length} customers
        </span>
      </div>
      <div class="space-y-2">
        ${counter.queue
          .map(
            (items, idx) => `
            <div class="flex items-center justify-between px-3 py-1 bg-gray-100 rounded">
              <span class="flex items-center gap-1 text-sm text-gray-700">
                <i class="ph ph-shopping-cart"></i> ${items} items
              </span>
              <button onclick="removeItem(${i}, ${idx})"
                      class="text-red-400 text-sm hover:text-red-600">–</button>
            </div>
        `
          )
          .join("")}
      </div>
      <p class="mt-4 text-sm text-gray-600">Total Items: <strong>${totalItems}</strong></p>
    `;

    card.addEventListener("click", () => {
      selectedCounterIndex = i;
      renderCounters();
    });

    checkoutContainer.appendChild(card);
  });
}

function removeItem(counterIndex, itemIndex) {
  counters[counterIndex].queue.splice(itemIndex, 1);
  renderCounters();
}

checkoutBtn.addEventListener("click", () => {
  const itemCount = parseInt(itemInput.value);
  if (isNaN(itemCount) || itemCount < 1) return;

  if (selectedCounterIndex === null) {
    alert("Please select a counter first.");
    return;
  }

  counters[selectedCounterIndex].queue.push(itemCount);
  itemInput.value = "";
  renderCounters();
});

renderCounters();
