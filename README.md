
<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/addisjackson/Budgy-frontend">
    <img src="/images/460x0w.webp" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Budgy, My Expense Tracker</h3>

  <p align="center">
    project_description 
    <br />
    <a href="https://github.com/addisjackson/Budgy-frontend"><strong>Explore the docs »</strong></a>
    <br />
   [<strong>Trello Board</strong>](https://trello.com/b/OIdxrpoU/budgy-my-expense-tracker-app) :trello:
    <br />
    <a href="https://github.com/addisjackson/Budgy_frontend">View Demo</a>
    ·
    <a href="https://github.com/addisjackson/Budgy_frontend/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/addisjackson/Budgy_frontend/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>

    .
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

# Budgy Budgets

![Budgets](/images/Budgets.png)

The aim of this project is to build an app that helps a user fully track their spending. It automatically creates budgets each month based on 6 categories of spending: Apparel, Entertainment, Childcare and Education, Food, Housing, and Travel. Each of these categories has been assigned a maximum spending amount based on a percentage of the monthly income, so based on the time and category of each expense, a budget can be created to track spending and show the savings each month in each budget.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get your local copy of my app, simply clone its [backend](https://github.com/addisjackson/budgy_backend) and [frontend](https://github.com/addisjackson/budgy_frontend). 

git clone https://github.com/addisjackson/budgy_frontend.git for the frontend, and https://github.com/addisjackson/budgy_backend.git for the backend.

You then changing into the directory of the clone:

  ie cd backend or,
      cd frontend.

Then at first, start up the backend by running 
      npm start.

Then the frontend by runing:
      npm start.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```js
  npm install npm@latest -g
  ```
For the backend: 
  ```js
  npm install express, cores, body-parser, dotenv, uuidv4, fs, nodemon, db, pg, pg-promise
  ```
For the frontend:
  '''js
  npm install react react-router react-router-dom react-icons react-dom react-scripts react-chartjs-2 chartjs uuidv4

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This app presents a very useful means of keeping track of your expenses. There is a list of all the inputted expenses with options to see the details of a single expense, to edit an expense, to add an expense and to delete an expense. 

There is also an option to see budgets created in the past that can still see it today. The budgets are presented with their month and date at which they had been made. Then there are budgets, which are categorized into 6 types: apparel, entertainment, children and education, travel, food and housing. With a pre-determined monthly income, each budget has a maximum spending that is a fraction of this income.

For Apparel it is 8%, for entertainment it 12%, for food it is 15%, childcare and education, 30%, housing, 25% and travel 10%. From these and the expenses assigned to them during that month, the amount remaining for each budget, each month can then be calculated. 

There is an option to edit a budget by changing its category which in turn changes its maximum spending and with changes in the expenses, also its amount remaining. The budgets are also represented in the form of a pie-chart as well.

Adding an expense would add a to the list of expenses for a budget who shares its category. If there are no budgets for that category yet for that month, adding an expense would automatically create a new budget with that listed expense.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] <a href="https://github.com/addisjackson/Budgy-frontend">
    <img src="/images//460x0w.webp" alt="Logo" width="80" height="80">
  </a>
- [ ] <p class="AddExpense">
  <img src="/images/AddExpense.png" alt="Logo" title="Logo title">
  <em>Add Expense</em>
</p>

- [ ] <p class="EditExpense">
  <img src="/images/EditExpense.png" alt="Logo" title="Logo title">
  <em>Edit Expense</em>
</p>

- [ ] <p class="Expense">
  <img src="/images/Expense.png" alt="Logo" title="Logo title">
  <em>Show Expense</em>
</p>

- [ ] <p class="Expenses">
  <img src="/images/Expenses.png" alt="Logo" title="Logo title">
  <em>Show Expenses</em>
</p>

- [ ] <p class="Budget">
  <img src="/images/Budget.png" alt="Logo" title="Logo title">
  <em>Show Budget</em>
</p>

- [ ] <p class="Expenses">
  <img src="/images/Expenses.png" alt="Logo" title="Logo title">
  <em>Show Expenss</em>
</p>

- [ ] <p class="Show Budgets">
  <img src="/images/Budgets.png" alt="Logo" title="Logo title">
  <em>Show Budgets</em>
</p>




See the [open issues](https://github.com/addisjackson/Budgy_frontend/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@linkedin](https://www.linkedin.com/in/addisjackson) - addisjackson@pursuit.org

Project Link: [https://github.com/addisjackson/Budgy_frontend](https://github.com/addisjackson/Budgy_frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/addisjackson/Budgy_frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/addisjackson/Budgy_frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/addisjackson/Budgy_frontend.svg?style=for-the-badge
[forks-url]: https://github.com/addisjackson/Budgy_frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/addisjackson/Budgy_frontend.svg?style=for-the-badge
[stars-url]: https://github.com/addisjackson/Budgy_frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/addisjackson/Budgy_frontend.svg?style=for-the-badge
[issues-url]: https://github.com/addisjackson/Budgy_frontend/issues
[license-shield]: https://img.shields.io/github/license/addisjackson/Budgy_frontend.svg?style=for-the-badge
[license-url]: https://github.com/addisjackson/Budgy_frontend/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/AddisJackson
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
