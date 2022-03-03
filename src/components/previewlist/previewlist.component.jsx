import React from "react";
import '../previewlist/previewlist.styles.css';


let lists = [
    {
        idtopic: 1,
        topic: 'Movie',
        movie: [
            {
                idmovie: 1,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 2,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 3,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 4,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
        ]
    },
    {
        idtopic: 2,
        topic: 'Drama',
        movie: [
            {
                idmovie: 1,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            }
        ]
    },
    {
        idtopic: 3,
        topic: 'Sitcom',
        movie: [
            {
                idmovie: 1,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            }
        ]
    },
];

const PreviewList = () => {
    return (
        <div className="basis-3/12 md:basis-3/12">
            {lists.map(list =>
            (
                <div key={list.idtopic}>
                    <h2 className="text-[25px] font-bold">{list.topic}</h2>
                    <div className="plist">
                        {
                            list.movie.map(m => (
                                <div key={m.idmovie} className="pmovie">
                                    <a href="#">
                                        <img src={m.banner} alt={m.title} />
                                        <span>{m.title}</span>
                                    </a>
                                </div>)
                            )
                        }
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default PreviewList;