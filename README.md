# BPL-DREAM 11

### Description

**1. Navbar:** Displays the user's available coins.

**2. Banner:** Encourages users to add more coins with a button click, which increases the coin count.

**3. Main Section:** Users can toggle between viewing available players and selected players.

**4. Player Selection:** A JSON file contains player data, and players are displayed in a card format. Users can choose players if they have enough coins.

**5. Validation:** Prevents users from selecting a player twice, or more than 6 players in total.

**6. Selected Players:** Displays a list of chosen players with an option to remove them.

**7. Dynamic Budget Management:** Coins are deducted when a player is selected, and players can be removed from the selected list.

### Technologies used

**1. React.js:** A JavaScript library for building the user interface with reusable components.

**2. JavaScript (ES6+):** Used for handling the logic and functionality, such as state management and event handling.

**3. CSS:** For styling the components and creating a responsive layout (or a CSS-in-JS solution like styled-components can be used).

**4. React Hooks:** Specifically useState for managing the application's state, including player selection, coin count, and toggling views.

**5. JSON:** Used to store and manage the player data locally in a file.

### Key Features of this Project

**1. Dynamic Player Selection with Budget Management:** Users can choose players from a list based on their available coins. The system ensures that players can't be selected if the user lacks sufficient coins or if the player has already been selected, enforcing a team limit of 6 players.

**2. Toggling Between Available and Selected Players:** The application allows users to seamlessly switch between viewing the available players and the list of players they have already selected, providing a clear overview of both sections.

**3. Validation and Alerts:** The project includes validations such as alerts when users attempt to select a player without sufficient funds, try to select the same player twice, or exceed the team limit, ensuring a smooth user experience.