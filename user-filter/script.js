class DataGenerator {
  async fetchData() {
    try {
      const loader = document.getElementById("loader");
      loader.style.display = "block"; // show the loader
      document.getElementById("search").disabled = true;
      const response = await fetch(`https://randomuser.me/api?results=100`);
      const data = await response.json();
      const detailsEl = document.getElementById("details");
      let content = "";
      for (let i = 0; i < data.results.length; i++) {
        const user = data.results[i];
        content += `
    <div class="item">
      <ol class="left">
        <li>
          <span>
            <img src="${user.picture.medium}" />
          </span>
        </li>
      </ol>
      <ol>
        <li>
          <span>${user.name.title} ${user.name.first} ${user.name.last}</span>
        </li>
        <li>
          <span>${user.gender}</span>
        </li>
        <li>
          <span>${user.email}</span>
        </li>
        <li>
          <span>${user.dob.age} years old</span>
        </li>
      </ol>
    </div>`;
      }
      detailsEl.innerHTML = content;
      loader.style.display = "none"; // hide the loader
      document.getElementById("search").disabled = false;

      return data.results;
    } catch (error) {
      console.error(error);
    }
  }

  async filterData(data) {
    try {
      const search = document.getElementById("search").value.toLowerCase();
      const filteredData = data.filter((user) => {
        const firstName = user.name.first.toLowerCase();
        const lastName = user.name.last.toLowerCase();
        return firstName.includes(search) || lastName.includes(search);
      });
      const detailsEl = document.getElementById("details");
      let content = "";
      for (let i = 0; i < filteredData.length; i++) {
        const user = filteredData[i];
        content += `
<div class="item">
  <ol class="left">
    <li>
      <span>
        <img src="${user.picture.medium}" />
      </span>
    </li>
  </ol>
  <ol>
    <li>
      <span>${user.name.title} ${user.name.first} ${user.name.last}</span>
    </li>
    <li>
      <span>${user.gender}</span>
    </li>
    <li>
      <span>${user.email}</span>
    </li>
    <li>
      <span>${user.dob.age} years old</span>
    </li>
  </ol>
</div>`;
      }
      detailsEl.innerHTML = content;
    } catch (error) {
      console.error(error);
    }
  }
}

const generator = new DataGenerator();
let data;

window.onload = async () => {
  data = await generator.fetchData();
  document.getElementById("search").addEventListener("input", () => {
    generator.filterData(data);
  });
};
