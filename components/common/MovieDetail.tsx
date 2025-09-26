import { AddPercentageProps } from "@/interfaces";
import { useState } from "react";
import { FaPlus, FaRegBookmark } from "react-icons/fa6";
import { MdOutlineStarRate } from "react-icons/md";
import { useStyleRegistry } from "styled-jsx";

const MovieDetail: React.FC<{ property: AddPercentageProps }> = ({ property }) => {
    const tabs = [
        {
            label: "Description",
            content: (
                <>
                    <p>About the movie</p>
                    {property.plot}
                </>
            )
        },
        {
            label: "Ratings",
            content: ""
        },
        {
            label: "Comments",
            content: property.reviews.length > 0
                ? property.reviews.map((review, index) => (
                    <div key={index}>
                        <div>{review.user}</div>
                        <div>{review.stars}</div>
                        <div>{review.comment}</div>
                    </div>
                )) : (<p>No reviews yet</p>),
        },
    ];

    const [activeTab, setActiveTab] = useState<any>(0);

    return (
        <div>
            <div>
                <div><img src={property.trailerUrl} alt={`${property.title} trailer`} /></div>
                <div><img src={property.posterUrl} alt={`${property.title} trailer`} /></div>
                <div>
                    <div>{property.title}</div>
                    <div> {property.year}<span className="text-[#2C2C2C]"> • </span>{property.genre.join("/")} <span className="text-[#2C2C2C]"> • </span> {`${property.duration}s`}</div>
                    <div>{property.rating}/10.0</div>
                </div>
            </div>
            <div>
                <button className="flex"><FaRegBookmark size={20} />Save</button>
                <button><MdOutlineStarRate size={20} />Rate</button>
                <button><FaPlus size={20} />Lists</button>
            </div>
            <div>
                <div>
                    <div>
                        {
                            tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`btn ${activeTab === index
                                        ? "btn-active" : "btn-secondary"}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.label}
                                </button>
                            ))
                        }
                    </div>
                    <div>
                        {tabs[activeTab].content}
                    </div>
                </div>
                <div>
                    
                </div>
                <div>
                    <p>Available on</p>
                    {
                        property.whereToWatch.length > 0 
                        ? property.whereToWatch.map((watch, index) => (
                            <button key={index}>{watch}</button>
                        )) : <button>Youtube</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;