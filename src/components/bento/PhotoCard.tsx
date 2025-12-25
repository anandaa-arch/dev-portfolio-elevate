import EditorialCard from "../EditorialCard";
import profilePhoto from "@/assets/profile-photo1.png";

const PhotoCard = () => {
  return (
    <EditorialCard className="editorial-tall relative overflow-hidden min-h-[300px] p-0" delay={0.1}>
      <div 
        className="absolute inset-0 bg-cover bg-center photo-bw"
        style={{ backgroundImage: `url(${profilePhoto})` }}
      />
      
      {/* Content overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-card via-card/90 to-transparent">
        <p className="editorial-label mb-2">About Me</p>
        <p className="editorial-body text-muted-foreground">
          Engineering student specializing in AI & Data Science. Building scalable web apps and decentralized systems.
        </p>
      </div>
      
      {/* Section number */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8">
        <span className="circled-number-lg bg-card">3</span>
      </div>
    </EditorialCard>
  );
};

export default PhotoCard;