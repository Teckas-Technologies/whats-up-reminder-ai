import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface WaitlistFormProps {
  children: React.ReactNode;
}

const WaitlistForm = ({ children }: WaitlistFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
 
    const script = document.createElement("script");
    script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div
          id="getWaitlistContainer"
          data-waitlist_id="29105"
          data-widget_type="WIDGET_1"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistForm;
