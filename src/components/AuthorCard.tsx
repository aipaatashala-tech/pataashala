import { Card } from '@/components/ui/card';

interface AuthorCardProps {
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
}

export const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <Card className="p-6 bg-card/80 border-2 border-border mt-8">
      <div className="flex items-start gap-4">
        <div className="text-4xl flex-shrink-0">{author.avatar}</div>
        <div>
          <h3 className="font-hand text-xl text-foreground mb-2">
            About the Author
          </h3>
          <p className="font-semibold text-foreground">{author.name}</p>
          <p className="text-muted-foreground text-sm mt-2">{author.bio}</p>
        </div>
      </div>
    </Card>
  );
};
