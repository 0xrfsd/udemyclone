import React, {useEffect, useState} from "react";
import Course1 from "../ui/course-1.png";
import Course2 from "../ui/course-2.jpg";

import ReactPlayer from 'react-player';

import {
    NavLink,    
} from "react-router-dom";

function HomePage(){

    useEffect(()=>{
        document.title = "Udemy";
    })

    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 min",            
            poster: Course1
        },
        {
            ID: 2,
            title: "Creating a beautiful Portrait Illustration. Learning new Technics and Tricks.",
            tutor: {
                ID: 2,
                name: "Uran Design",
                username: "urancd",
                dp: "http://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration: "1 hr 13 min",            
            poster: Course2
        }
    ]);

    const [topTutors, setTopTutors] = useState([
        {
                ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "http://placeimg.com/100/100/people?tutors-" + 1,
        },
        {
            ID: 2,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 2,
        },        
        {
            ID: 3,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 3,
        },
        {
            ID: 4,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 4,
        },
        {
            ID: 5,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 5,
        },        
        {
            ID: 6,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 6,
        }
    ]);

    //Live Tutors List
    var tutorList = [];
    for(let i = 0; i < 8; i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/100/100/people?" + i}  className="bl" />
            </button>
        );
    }

    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        courseList.push(
            <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"popular-course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster +") no-repeat center"
                }}>

                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                        <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
                    </div>

                </div>
            </NavLink>
        );
    }

    var topTutorsList = [];
    for(let i = 0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
                <div className="user aic flex">
                    <div className="pic">
                        <img src={topTutors[i].dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                        <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
                    </div>
                </div>                
            </a>
        );
    }

    return (
        <div className="home-page rel">

            <ReactPlayer 
            playing={true}
            controls={false}
            url='https://vimeo.com/80156100' />

        </div>
    )
}

export default HomePage;