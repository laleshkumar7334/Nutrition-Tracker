// script.js

document.addEventListener('DOMContentLoaded', () => {
    const foodForm = document.getElementById('food-form');
    const foodList = document.getElementById('food-list');
    const totalCaloriesEl = document.getElementById('total-calories');
    const totalProteinEl = document.getElementById('total-protein');
    const totalCarbsEl = document.getElementById('total-carbs');
    const totalFatsEl = document.getElementById('total-fats');

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    foodForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const foodName = document.getElementById('food-name').value;
        const calories = parseFloat(document.getElementById('calories').value);
        const protein = parseFloat(document.getElementById('protein').value);
        const carbs = parseFloat(document.getElementById('carbs').value);
        const fats = parseFloat(document.getElementById('fats').value);

        totalCalories += calories;
        totalProtein += protein;
        totalCarbs += carbs;
        totalFats += fats;

        totalCaloriesEl.textContent = totalCalories;
        totalProteinEl.textContent = totalProtein;
        totalCarbsEl.textContent = totalCarbs;
        totalFatsEl.textContent = totalFats;

        const li = document.createElement('li');
        li.innerHTML = `<span>${foodName}</span>
                            <span>${calories} kcal</span>
                            <span>${protein}g P</span>
                            <span>${carbs}g C</span>
                            <span>${fats}g F</span>`;
        foodList.appendChild(li);

        foodForm.reset();
    });
});