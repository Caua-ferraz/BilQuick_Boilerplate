import React from "react";

interface VideoProps {
    videoId: string;
    title: string;
}

const Video: React.FC<VideoProps> = ({ videoId, title }) => {
    return (
        <div className="relative pb-9/16" style={{ paddingBottom: "56.25%" }}>
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;
