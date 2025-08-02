
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Heading,
  Underline as UnderlineIcon,
  Link as LinkIcon,
  Image as ImageIcon
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  className?: string;
}

export function RichTextEditor({
  content,
  onChange,
  className
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}), 
      Underline.configure({}),
      Link.configure({
        openOnClick: false,
      }),
      Image.configure({})
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    }
  });

  if (!editor) {
    return null;
  }

  const toggleBold = () => editor.chain().focus().toggleBold().run();
  const toggleItalic = () => editor.chain().focus().toggleItalic().run();
  const toggleUnderline = () => editor.chain().focus().toggleUnderline().run();
  const toggleHeading = () => editor.chain().focus().toggleHeading({ level: 2 }).run();
  const toggleBulletList = () => editor.chain().focus().toggleBulletList().run();
  const toggleOrderedList = () => editor.chain().focus().toggleOrderedList().run();
  const toggleBlockquote = () => editor.chain().focus().toggleBlockquote().run();

  const ToolbarButton = ({ 
    onClick, 
    active = false,
    children
  }: { 
    onClick: () => void; 
    active?: boolean;
    children: React.ReactNode;
  }) => {
    return (
      <Button
        type="button"
        variant={active ? "default" : "ghost"}
        size="icon"
        onClick={onClick}
        className={`h-8 w-8 ${active ? 'bg-primary' : ''}`}
      >
        {children}
      </Button>
    );
  };

  return (
    <div className={`border border-input rounded-md bg-background ${className}`}>
      <div className="flex flex-wrap gap-1 p-1 border-b">
        <ToolbarButton
          onClick={toggleBold}
          active={editor.isActive("bold")}
        >
          <Bold className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={toggleItalic}
          active={editor.isActive("italic")}
        >
          <Italic className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={toggleUnderline}
          active={editor.isActive("underline")}
        >
          <UnderlineIcon className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={toggleBulletList}
          active={editor.isActive("bulletList")}
        >
          <List className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={toggleOrderedList}
          active={editor.isActive("orderedList")}
        >
          <ListOrdered className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={toggleBlockquote}
          active={editor.isActive("blockquote")}
        >
          <Quote className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={toggleHeading}
          active={editor.isActive("heading")}
        >
          <Heading className="h-4 w-4" />
        </ToolbarButton>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => {
            const url = window.prompt("URL");
            if (url) {
              editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
            }
          }}
          className="h-8 w-8"
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => {
            const url = window.prompt("Image URL");
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          className="h-8 w-8"
        >
          <ImageIcon className="h-4 w-4" />
        </Button>
      </div>
      <EditorContent 
        editor={editor} 
        className="p-3 min-h-[200px] prose dark:prose-invert max-w-none focus:outline-none" 
      />
    </div>
  );
}
