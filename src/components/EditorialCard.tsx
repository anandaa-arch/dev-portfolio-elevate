import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EditorialCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const EditorialCard = ({ children, className, delay = 0 }: EditorialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={cn("editorial-card p-6 md:p-8", className)}
    >
      {children}
    </motion.div>
  );
};

export default EditorialCard;