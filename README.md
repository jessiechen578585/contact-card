
# Q2: Real world problem 
Write a responsive “Contacts” application that allows the user to browse their contacts:
•	Make use of https://jsonplaceholder.typicode.com/ (/users are the contacts)
•	Use either VueJS, Angular or React
•	Make it visually appealing
•	No need to implement Create/Update/Delete
•	Provide instructions on how to run the code





# From Jessie Mingxia Chen:

    # Instruction on how to run the code
    1. Make sure you have Node.js and npm (Node Package Manager) installed on your machine: https://nodejs.org/en/download/package-manager 

    2. Install the required dependencies by running: npm install
    3. Start the development server: npm start ( or npm run dev)
    4. Open your browser and visit http://localhost:3000

1. useState and useEffect are used from React to manage state and perform side effects

2. useEffect is used to fetch the contacts from the API (https://jsonplaceholder.typicode.com/users) when the component mounts. It sorts the fetched data alphabetically by name and updates the APIdata and filteredData state variables

3. The findContact function is called whenever the user types in the search input. It filters the APIdata based on the search input and updates the filteredData state accordingly.

4. The showContact function is called when a contact tab is clicked. It finds the corresponding contact from the filteredData based on the clicked contact's ID and updates the contact state variable. It also updates the CSS class of the selected contact tab to highlight it.

5. The component renders a container with two main sections:
    1. The left section displays the search input and the list of contact tabs. It maps over the filteredData and renders each contact as a clickable tab.
    2. The right section displays the detailed information of the selected contact. It conditionally renders the contact information based on the contact state variable.

6. The component uses CSS classes to style the various elements and make the application visually appealing.