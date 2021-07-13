# About

This is the project submission that won first place for the Black Wings hackathon hosted by Rewriting the code built by Ahana Bhattacharya, Alice Wang, Alisha Khan and Huyen Pham.

Even before the COVID-19 pandemic, New York City struggled with a hunger crisis. According to City Harvest, the pre-COVID figures show that 2.5 million working-age New Yorkers were struggling to make ends meet. Nearly 1.2 million New Yorkers were experiencing food insecurity (defined by the U.S. Department of Agriculture as a “lack of constant access to enough food for an active, healthy life”). During the current pandemic, the situation is even more dire: Over 1.5 million New Yorkers are struggling to feed themselves and their families (38% increase from pre-COVID statistics). One in four children are experiencing food insecurity (49% increase from pre-COVID statistics).

Right now, it is even more important to support local food banks. Our team recognized that finding information about different food banks (including their hours of operation, location, and requested items) can be difficult. Therefore, we made this website where people can easily search for food banks that match their criteria, making it easier for them to access and support food banks.

## What it does 

Our website has three main sections (About, Find Local Food Banks, Donate/Volunteer) that provide users with information and options to get involved with their local food bank. We have an interactive map that shows the concentration of food banks per zip code in New York City. We also have a form that allows users to search for food banks based on zip code. After inputting their zip code, the table below will show the name, address and telephone number for all food banks in the zip code.

## How we built it 

Using Repl.it to collaborate, we used a combination of HTML, CSS, JavaScript and Python.

For our interactive map, we initially web scraped info from an existing website with food bank information using BeautifulSoup4. We then cleaned up the information using Pandas. Finally, utilizing the cleaned data and Folium library, we built the interactive map that displays the concentration of food banks per zip code.

For our search by zip code feature, we converted our cleansed data into a CSV file with Pandas. Then we used JavaScript to implement the search and display portions.

