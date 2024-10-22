"use client";
import React, { forwardRef } from "react";
import { Controlled as CodeMirror } from 'react-codemirror2'; 
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; 
import 'codemirror/mode/javascript/javascript';

const CodeEditor = forwardRef(({ value, onChange, theme }, ref) => {
  return (
    <CodeMirror
      value={value}
      options={{
        mode: 'javascript',
        theme: theme === 'dark' ? 'material' : 'default', 
        lineNumbers: true,
        viewportMargin: Infinity,
        scrollbarStyle: null, 
      }}
      editorDidMount={(editor) => {
        editor.setSize("100%", "auto"); 
      }}
      onBeforeChange={(editor, data, value) => {
        onChange(value); 
      }}
      ref={ref}
    />
  );
});

export default CodeEditor;
