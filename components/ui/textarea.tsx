"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onResize'> {
  /** Additional class name for the textarea element */
  className?: string;
  /** Error message to display */
  error?: string;
  /** Label for the textarea */
  label?: string;
  /** Maximum character count */
  maxCount?: number;
  /** Callback function when the textarea resizes */
  onResize?: (height: number) => void;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, maxCount, onResize, ...props }, ref) => {
    const textareaId = React.useId();
    const [charCount, setCharCount] = React.useState(0);
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useImperativeHandle(ref, () => textareaRef.current!);

    const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
      const textarea = event.currentTarget;
      setCharCount(textarea.value.length);

      if (onResize) {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        onResize(textarea.scrollHeight);
      }

      if (props.onInput) {
        props.onInput(event);
      }
    };

    React.useEffect(() => {
      if (textareaRef.current && onResize) {
        const resizeObserver = new ResizeObserver((entries) => {
          for (let entry of entries) {
            onResize(entry.contentRect.height);
          }
        });

        resizeObserver.observe(textareaRef.current);

        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [onResize]);

    return (
      <div className="relative">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500",
            className
          )}
          ref={textareaRef}
          onInput={handleInput}
          {...props}
        />
        <div className="flex justify-between mt-1">
          {error && (
            <p className="text-sm text-red-600" id={`${textareaId}-error`}>
              {error}
            </p>
          )}
          {maxCount && (
            <p className={cn(
              "text-sm text-gray-500",
              charCount > maxCount && "text-red-500"
            )}>
              {charCount}/{maxCount}
            </p>
          )}
        </div>
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

// Customization and usage examples:

// 1. Basic usage
// <Textarea placeholder="Enter your message" />

// 2. With label
// <Textarea label="Feedback" placeholder="Please provide your feedback" />

// 3. With error message
// <Textarea
//   label="Bio"
//   placeholder="Tell us about yourself"
//   error="Bio must not exceed 500 characters"
// />

// 4. With character count
// <Textarea
//   label="Description"
//   placeholder="Describe your project"
//   maxCount={200}
// />

// 5. Auto-resizing textarea
// const [textareaHeight, setTextareaHeight] = React.useState(80);
// 
// <Textarea
//   label="Auto-resizing Textarea"
//   placeholder="Type something..."
//   onResize={(height) => setTextareaHeight(height)}
//   style={{ height: `${textareaHeight}px` }}
// />

// 6. Custom styling
// <Textarea
//   className="bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//   placeholder="Custom styled textarea"
// />

// 7. Disabled state
// <Textarea disabled placeholder="This textarea is disabled" />

// 8. With max length
// <Textarea maxLength={500} placeholder="Limited to 500 characters" />

// 9. Rich text editing (requires additional libraries)
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// 
// const [value, setValue] = React.useState('');
// 
// <div>
//   <label className="block text-sm font-medium text-gray-700 mb-1">
//     Rich Text Editor
//   </label>
//   <ReactQuill theme="snow" value={value} onChange={setValue} />
// </div>

// Note: For rich text editing, you'll need to install additional libraries like react-quill or draft-js
