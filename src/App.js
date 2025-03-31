import React from "react";
import ReactDOM from "react-dom/client";


const restaurantList =   
[
    {
        "Restaurant_Name": "Burger King",
        "URL": "https://www.burgerking.com",
        "ImgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/e35f38cf-8697-46f3-9d5d-cf80c6493833_596949.jpg",
        "Timing": "10:00 AM - 10:00 PM",
        "Address": "123 Main Street, Sample City",
        "Location": "Sample Location",
        "City": "Sample City",
        "Offer": "10% off on orders over $50",
        "Contact_Number": "+1 123-456-7890",
        "Cost_for_two": 40,
        "Restaurant_Type": "Cuisine Type 1",
        "Ratings_for_Swiggy": 4.5
    },
    {
        "Restaurant_Name": "Thai Express",
        "URL": "https://www.thaiexpress.com",
        "ImgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
        "Timing": "11:00 AM - 9:00 PM",
        "Address": "456 Elm Street, Another City",
        "Location": "Another Location",
        "City": "Another City",
        "Offer": "Free dessert with every meal",
        "Contact_Number": "+1 987-654-3210",
        "Cost_for_two": 30,
        "Restaurant_Type": "Cuisine Type 2",
        "Ratings_for_Swiggy": 4.0
    },
    {
        "Restaurant_Name": "Pizza Hut",
        "URL": "https://www.pizzahut.com",
        "ImgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
        "Timing": "10:00 AM - 10:00 PM",
        "Address": "123 Main Street, Sample City",
        "Location": "Sample Location",
        "City": "Sample City",
        "Offer": "10% off on orders over $50",
        "Contact_Number": "+1 123-456-7890",
        "Cost_for_two": 40,
        "Restaurant_Type": "Cuisine Type 1",
        "Ratings_for_Swiggy": 4.5
    },
    {
        "Restaurant_Name": "Desi Tadka",
        "URL": "https://www.desitadka.com",
        "ImgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/e9d56d38-80fd-4f56-8992-274ad6d944bc_334476.JPG",
        "Timing": "11:00 AM - 9:00 PM",
        "Address": "456 Elm Street, Another City",
        "Location": "Another Location",
        "City": "Another City",
        "Offer": "Free dessert with every meal",
        "Contact_Number": "+1 987-654-3210",
        "Cost_for_two": 30,
        "Restaurant_Type": "Cuisine Type 2",
        "Ratings_for_Swiggy": 4.0
    },
    {
        "Restaurant_Name": "Burger King",
        "URL": "https://www.burgerking.com",
        "ImgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/e35f38cf-8697-46f3-9d5d-cf80c6493833_596949.jpg",
        "Timing": "10:00 AM - 10:00 PM",
        "Address": "123 Main Street, Sample City",
        "Location": "Sample Location",
        "City": "Sample City",
        "Offer": "10% off on orders over $50",
        "Contact_Number": "+1 123-456-7890",
        "Cost_for_two": 40,
        "Restaurant_Type": "Cuisine Type 1",
        "Ratings_for_Swiggy": 4.5
    },
    {
        "Restaurant_Name": "Thai Express",
        "URL": "https://www.thaiexpress.com",
        "ImgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
        "Timing": "11:00 AM - 9:00 PM",
        "Address": "456 Elm Street, Another City",
        "Location": "Another Location",
        "City": "Another City",
        "Offer": "Free dessert with every meal",
        "Contact_Number": "+1 987-654-3210",
        "Cost_for_two": 30,
        "Restaurant_Type": "Cuisine Type 2",
        "Ratings_for_Swiggy": 4.0
    },
    {
        "Restaurant_Name": "Pizza Hut",
        "URL": "https://www.pizzahut.com",
        "ImgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
        "Timing": "10:00 AM - 10:00 PM",
        "Address": "123 Main Street, Sample City",
        "Location": "Sample Location",
        "City": "Sample City",
        "Offer": "10% off on orders over $50",
        "Contact_Number": "+1 123-456-7890",
        "Cost_for_two": 40,
        "Restaurant_Type": "Cuisine Type 1",
        "Ratings_for_Swiggy": 4.5
    },
    {
        "Restaurant_Name": "Desi Tadka",
        "URL": "https://www.desitadka.com",
        "ImgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/e9d56d38-80fd-4f56-8992-274ad6d944bc_334476.JPG",
        "Timing": "11:00 AM - 9:00 PM",
        "Address": "456 Elm Street, Another City",
        "Location": "Another Location",
        "City": "Another City",
        "Offer": "Free dessert with every meal",
        "Contact_Number": "+1 987-654-3210",
        "Cost_for_two": 30,
        "Restaurant_Type": "Cuisine Type 2",
        "Ratings_for_Swiggy": 4.0
    },
]
  

const MainContainerComponent =()=>
{
    return( 
    <div className="main-container" id="main-container">
        <HeaderComponent className="headerComponent"></HeaderComponent>
        <BodyComponent></BodyComponent>
        <FooterComponent></FooterComponent>
    </div>
    )
};
const HeaderComponent=() =>
{
    return(
        <div className="header">
            <NavigationComponent />
        </div>
    )
};
const BodyComponent = () =>
{
    return(
        <div className="body">
            <SearchbarComponent />
            <RestaurantGridComponent />
            
        </div>
    )
};
const SearchbarComponent = () =>
{
    return(
        <div className="search-bar">
            <input type="text" placeholder="Search..."
            style={{height:"25px", width:"200px"}}/>
            <button className="search-button" 
            style={{height:"30px", width:"90px"}}>Search</button>
        </div>
    )
}

const RestaurantGridComponent = () =>
{
    return(<div className="image-grid">
            {restaurantList.map((restaurantItem, index )=> 
            <RestCardComponent key={index}  restaurant ={restaurantItem}/>)
            }
        </div>
        )
};
const RestCardComponent = (props)=>
{
    const { restaurant } = props;
    return(
        <div className="image-card">
            <img src= {restaurant.ImgUrl}
            alt={restaurant.Restaurant_Name}
            style={{ width: "200px", height: "250" }}/>
            <h3>{restaurant.Restaurant_Name}</h3>
            <h3>{restaurant.URL}</h3>
            <h3>{restaurant.Timimg}</h3>
            <p>{restaurant.Address}</p>
        </div>
    )
}

const FooterComponent = () =>
{
    return(
        <div className="footer">
           
        </div>
    )
}

const NavigationComponent = ()=>
{
    return(
        <div className="navigation">
            <div className="logo">
            <img src= "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/local-restaurant-logo-design-template-5f308b6758539396593b1935aa7f7964_screen.jpg?ts=1676294427"
            style={{ width: "150px", height: "auto" }}/>
            </div>
            <div className="nav-item">Home</div>
            <div className="nav-item">About</div>
            <div className="nav-item">Contact</div>
            <div className="nav-item">Menu</div>
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainContainerComponent />);