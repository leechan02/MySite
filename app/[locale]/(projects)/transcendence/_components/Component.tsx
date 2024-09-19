"use client";
import React, { useState } from "react";
import Code from "@/components/content/Code";
import Content from "@/components/content/Content";
import Title from "@/components/content/Title";
import { FiFile } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import VideoBox from "@/components/content/VideoBox";

interface CodeItem {
  code: string;
  language: string;
  codeEx: string;
  label: string;
}

export default function Component() {
  const codeItems: CodeItem[] = [
    {
      code: `class Component {
  //...
  render() {}
  initialize() {
    //...
  }
}
export default Component;`,
      language: 'javascript',
      codeEx: 'firstCodeEx',
      label: 'Component.js'
    },
    {
      code: `import { Component } from "../../core/index.js";
class FriendsButton extends Component {
  render() {
    //...
  }
}
export default FriendsButton;`,
      language: 'javascript',
      codeEx: 'secondCodeEx',
      label: 'FriendsButton.js'
    },
    {
      code: `const createComponent = (Component, props) => {
  const component = new Component(props);
  return component.initialize();
};
export default createComponent;`,
      language: 'javascript',
      codeEx: 'thirdCodeEx',
      label: 'createComponent.js'
    },
    {
      code: `let activeComponent;
switch (this.state.activeOption) {
   case "Game":
     activeComponent = createComponent(GameOption, {});
     break;
   case "Account":
     activeComponent = createComponent(AccountOption, {});
     break;
   case "Credits":
     activeComponent = createComponent(CreditsOption, {});
     break;
}`,
      language: 'javascript',
      codeEx: 'fourthCodeEx',
      label: 'ComponentSwitch.js'
    }
  ];

  const [activeCodeIndex, setActiveCodeIndex] = useState(0);

  return (
    <section
      id='component'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='transcendence.component' />
      <Content
        project='transcendence.component'
        title='first'
        content='firstContent'
      />
      <div className='flex flex-col sm:flex-row w-full gap-8'>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCodeIndex}
            initial={{ opacity: 1, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-1/2"
          >
            <Code
              project='transcendence.component'
              code={codeItems[activeCodeIndex].code}
              language={codeItems[activeCodeIndex].language}
              codeEx={codeItems[activeCodeIndex].codeEx}
            />
          </motion.div>
        </AnimatePresence>
        <div className='w-full sm:w-1/2 flex justify-center items-center'>
          <div className='grid grid-cols-2 gap-4 gap-y-8 justify-items-center'>
            {codeItems.map((item, index) => (
              <motion.div 
                key={index}
                className='flex flex-col justify-center items-center gap-2 cursor-pointer'
                onClick={() => setActiveCodeIndex(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiFile 
                  className={`text-4xl transition-colors duration-300 ${
                    activeCodeIndex === index 
                      ? 'text-primary' 
                      : 'text-foreground opacity-40'
                  }`} 
                />
                <div 
                  className={`text-xs font-mono transition-colors duration-300 text-center ${
                    activeCodeIndex === index 
                      ? 'text-primary' 
                      : 'text-foreground opacity-40'
                  }`}
                >
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <VideoBox src='/video/pong_com.mp4' />
    </section>
  );
}