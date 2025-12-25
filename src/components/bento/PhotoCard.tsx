import BentoCard from "../BentoCard";
import profilePhoto from "@/assets/profile-photo.jpg";
import { MapPin } from "lucide-react";

const PhotoCard = () => {
  return (
    <BentoCard className="bento-tall relative overflow-hidden min-h-[300px]" delay={0.1}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${profilePhoto})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={14} className="text-primary" />
          <span>Pune, Maharashtra</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-mono">
          B.E. AI & Data Science
        </p>
      </div>
    </BentoCard>
  );
};

export default PhotoCard;
