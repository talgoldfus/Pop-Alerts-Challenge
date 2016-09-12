# Pop-Alerts Challenge :

The objective of the challenge is to create the HTML/CSS/JS needed to show the page as represented in the 2 following design comps:

![Overview](https://github.com/talgoldfus/Pop-Alerts-Challenge/blob/master/challengeCopms/popalerts_0014_Dropdown.png)

![Overview](https://github.com/talgoldfus/Pop-Alerts-Challenge/blob/master/challengeCopms/popalerts_0011_Selection.png)


##Your work will be evaluated on the following criteria:
Attention to Detail: your code should represent the design comps as accurately as possible

Structure: your code should demonstrate that you work in a structured manner and are able to separate concerns in your code.

Responsiveness: we live in a mobile world.

Creativity: obviously the jpg is of a dynamic system. Hint hint.

Framework: feel free to show off your fantastic skills in your framework of choice. But realize that every framework has a cost, so do not use more than you really need.

Enthusiasm: by looking at your test, we can tell how motivated you are to work at X company.

## My solution

I decided to try and build a very dynamic solution of the comps using React / Redux framework and integrated the bootstrap grid system to help with the responsiveness of the challenge. I wanted the final solution of this challenge to have more capabilities then the two highlighted features of the design comps (Edit,Dropdown menu) so i added a few more dynamic features:

### 1) Search bar allows the user to search for alerts containing or matching his text input. 
### 2) Filter tabs allows the user to filter between popular alerts and his alerts, for this i created a small mock seed/database file to simulate a response from the server with a list of alert objects that held data about what type of alert is; popular,user alerts or both.
### 4) Routes were added to the application using the React-Router library to allow multiple page views for future Restful page layout and addition of more dynamic pages of this app.
### 5) Dropdown menu that actually links to different routes and will only show links to the routes that the user is not currently browsing in (If the user is browsing at /terms term wont be included and will be replace by Homepage instead).
### 6) A hyper link was added to the navigation bar headline so the user can always return to the homepage without the need to click the menu.

##Live Demo

https://pop-alert.herokuapp.com/
