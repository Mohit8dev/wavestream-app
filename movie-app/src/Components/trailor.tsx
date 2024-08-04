import 'bootstrap/dist/css/bootstrap.min.css';


type TrailorProps = {
    id: number;
    video: string;
    title?: string;
}

const getYoutubeEmbedUrl = (videoUrl: string) => {
    const videoId = videoUrl.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

const Trailor = (props: TrailorProps) => {
    const {id, video, title} = props;
    const embedUrl = getYoutubeEmbedUrl(video);
  
    return (
        <div className='trailor-wrapper' key={id}>
            <div className="trailor-content ratio ratio-16x9">
                <iframe
                    width="100%"
                    allowFullScreen
                    src={embedUrl}
                    title={title}
                ></iframe>
            </div> 
        </div>
    );
}

export default Trailor;
