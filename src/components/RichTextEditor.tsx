import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { 
  PhotoIcon, 
  LinkIcon, 
  BoltIcon, 
  DocumentTextIcon, 
  ListBulletIcon 
} from '@heroicons/react/24/outline';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: 'İçeriğinizi buraya yazın...',
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (typeof result === 'string') {
            editor.chain().focus().setImage({ src: result }).run();
          }
        };
        reader.readAsDataURL(file);
      }
    };

    input.click();
  };

  const addLink = () => {
    const url = window.prompt('URL giriniz:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className="prose-editor bg-black/40 backdrop-blur-xl rounded-lg overflow-hidden ring-1 ring-white/10">
      <div className="border-b border-white/10 p-2 flex flex-wrap gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-white/10 transition-colors ${
            editor.isActive('bold') ? 'bg-purple-600/50' : ''
          }`}
          title="Kalın"
        >
          <BoltIcon className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-white/10 transition-colors ${
            editor.isActive('italic') ? 'bg-purple-600/50' : ''
          }`}
          title="İtalik"
        >
          <DocumentTextIcon className="w-5 h-5" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-white/10 transition-colors ${
            editor.isActive('heading', { level: 2 }) ? 'bg-purple-600/50' : ''
          }`}
          title="Başlık"
        >
          <DocumentTextIcon className="w-5 h-5" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-white/10 transition-colors ${
            editor.isActive('bulletList') ? 'bg-purple-600/50' : ''
          }`}
          title="Liste"
        >
          <ListBulletIcon className="w-5 h-5" />
        </button>

        <button
          onClick={addLink}
          className={`p-2 rounded hover:bg-white/10 transition-colors ${
            editor.isActive('link') ? 'bg-purple-600/50' : ''
          }`}
          title="Link Ekle"
        >
          <LinkIcon className="w-5 h-5" />
        </button>

        <button
          onClick={addImage}
          className="p-2 rounded hover:bg-white/10 transition-colors"
          title="Resim Ekle"
        >
          <PhotoIcon className="w-5 h-5" />
        </button>
      </div>

      <EditorContent 
        editor={editor} 
        className="min-h-[400px] p-4 prose prose-invert max-w-none"
      />

      <style>{`
        .ProseMirror {
          min-height: 400px;
          outline: none;
        }
        .ProseMirror p {
          margin: 1em 0;
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          margin: 1em 0;
          border-radius: 0.5rem;
        }
        .ProseMirror a {
          color: #a855f7;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default RichTextEditor;