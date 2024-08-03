"use client";
import Image from "next/image";

const Works = ({ item }: any) => {
    const comments = String(item.comment).split("//");
    return (
        <div className="b-comment-single slide-top" key={item.id}>
            <div className="thumb">
                <Image src={item.avatar} alt="Image" priority />
            </div>
            <div className="content">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h5>{item.role}</h5>
                    <h5>{item.authorName}</h5>
                </div>
                <p className="tertiary-text">{item.time}</p>
                <div className="text-group slide-top">
                    <ul className="mt-0" style={{ listStyleType: "disc" }}>
                        {comments.map((each: string, index: number) => (
                            <li key={index}>{each}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Works;
