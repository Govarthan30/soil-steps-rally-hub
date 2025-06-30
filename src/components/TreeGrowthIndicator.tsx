
import { TreePine, Leaf, Sprout } from "lucide-react";
import { useEffect, useState } from "react";

interface TreeGrowthIndicatorProps {
  stage?: 'seed' | 'sprout' | 'tree';
  size?: 'sm' | 'md' | 'lg';
  showSoil?: boolean;
}

const TreeGrowthIndicator = ({ 
  stage = 'tree', 
  size = 'md',
  showSoil = true 
}: TreeGrowthIndicatorProps) => {
  const [currentStage, setCurrentStage] = useState(0);
  
  const stages = ['seed', 'sprout', 'tree'];
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentIcon = () => {
    switch (stages[currentStage]) {
      case 'seed':
        return <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />;
      case 'sprout':
        return <Sprout className={`${sizeClasses[size]} text-primary leaf-rustle`} />;
      case 'tree':
        return <TreePine className={`${sizeClasses[size]} text-primary tree-grow`} />;
      default:
        return <TreePine className={`${sizeClasses[size]} text-primary`} />;
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative flex items-end justify-center">
        {showSoil && (
          <div className="w-20 h-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full soil-spread" />
        )}
        <div className="absolute bottom-1 flex items-center justify-center">
          {getCurrentIcon()}
        </div>
      </div>
      {showSoil && (
        <div className="text-xs text-muted-foreground font-medium">
          {stages[currentStage] === 'seed' && "Planting Dreams"}
          {stages[currentStage] === 'sprout' && "Growing Knowledge"}
          {stages[currentStage] === 'tree' && "Flourishing Future"}
        </div>
      )}
    </div>
  );
};

export default TreeGrowthIndicator;
