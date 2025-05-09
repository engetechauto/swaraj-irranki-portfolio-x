
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-medium mb-6">Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="btn-primary">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" /> Go to Homepage
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/about">
            <ArrowLeft className="mr-2 h-5 w-5" /> About Page
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
