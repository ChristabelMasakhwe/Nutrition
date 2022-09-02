async function getMealOfTheDay() {
    return fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
      (response) => response.json()
    );
  }
  async function mealData() {
    console.log();
    const data = await getMealOfTheDay();
  
    return {
      title: data.meals[0].strMeal,
      imageUrl: data.meals[0].strMealThumb,
      instructions: data.meals[0].strInstructions
        .split("\r\n")
        .filter((x) => x.length != 0),
    };
  }
  window.addEventListener("DOMContentLoaded", async (event) => {
    const meal = await mealData();
    document.getElementById("mealImage").src = meal.imageUrl;
    document.getElementById("mealTitle").innerHTML = meal.title;
  
  
    let listElement = document.getElementById("mealInstructions");
    meal.instructions.forEach((instruction) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = instruction;
      listElement.appendChild(li);
    });
  });

  // Contact Us Form.
document.getElementById("contactSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    console.log({ name, email, phone, message });
  });
