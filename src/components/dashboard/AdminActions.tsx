
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export const AdminActions = ({ onEdit, onDelete }: AdminActionsProps) => {
  return (
    <div className="absolute top-2 right-2 flex gap-2 z-10">
      <Button
        variant="secondary"
        size="icon"
        onClick={onEdit}
        className="bg-white hover:bg-gray-100"
      >
        <Edit className="h-4 w-4" />
      </Button>
      <Button
        variant="destructive"
        size="icon"
        onClick={onDelete}
        className="bg-white hover:bg-red-100 text-red-600 hover:text-red-700"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
