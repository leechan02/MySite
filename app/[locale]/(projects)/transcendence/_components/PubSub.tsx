"use client";
import React, { useState } from "react";
import Code from "@/components/content/Code";
import Content from "@/components/content/Content";
import Title from "@/components/content/Title";
import { FiFile } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface CodeItem {
  code: string;
  language: string;
  codeEx: string;
  label: string;
}

export default function PubSub() {
  const codeItems: CodeItem[] = [
    {
      code: `class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
	  //..
  }

  publish(event, data = {}) {
	  //..
  }
}`,
      language: 'javascript',
      codeEx: 'firstCodeEx',
      label: 'pubsub.js'
    },
    {
      code: `class Store {
  constructor(params) {
	  //...
    self.state = new Proxy(params.state || {}, {
      set: function (state, key, value) {
        state[key] = value;

        self.events.publish(key + "Change", self.state);

        self.status = "resting";

        return true;
      },
    });
  }`,
      language: 'javascript',
      codeEx: 'secondCodeEx',
      label: 'store.js'
    },
    {
      code: `export default {
  updateNickname(state, payload) {
    state.nickname = payload;
    return state;
  },
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode;
    return state;
  },
  // ...
};`,
      language: 'javascript',
      codeEx: 'thirdCodeEx',
      label: 'mutation.js'
    },
    {
      code: `Store.events.subscribe("darkModeChange", (newState) => {
  console.log("dark mode change:", newState.darkMode);
});`,
      language: 'javascript',
      codeEx: 'fourthCodeEx',
      label: 'using example'
    }
  ];

  const [activeCodeIndex, setActiveCodeIndex] = useState(0);

  return (
    <section
      id='pubsub'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='transcendence.pubsub' />
      <Content
        project='transcendence.pubsub'
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
              project='transcendence.pubsub'
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
                      ? 'text-foreground' 
                      : 'text-foreground opacity-40'
                  }`} 
                />
                <div 
                  className={`text-xs font-mono transition-colors duration-300 text-center ${
                    activeCodeIndex === index 
                      ? 'text-foreground' 
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
    </section>
  );
}