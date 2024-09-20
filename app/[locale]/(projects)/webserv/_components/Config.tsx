"use client";
import React, { useState } from "react";
import Code from "@/components/content/Code";
import Content from "@/components/content/Content";
import Title from "@/components/content/Title";
import { FiFile } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import VideoBox from "@/components/content/VideoBox";
import ImageBox from "@/components/content/ImageBox";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

export default function Config() {
  const codeItems: CodeItem[] = [
    {
      code: `class Common {
public:
  static int mKqueue;       // Description for mKqueue
  static bool mRunning;     // Description for mRunning
  static Node *mConfigTree; // Root node for some configuration tree (assuming from the name)
  static ConfigMap *mConfigMap; // A complex map with described structure
};`,
      language: 'cpp',
      codeEx: 'firstCodeEx',
      label: 'Common.cpp'
    },
    {
      code: `WebServer::WebServer(const std::string &path)
    : mGood(true), mEventList(MAX_EVENT) {
  Common::mKqueue = kqueue();

  Config::MakeConfigTree(path);

  Config::MakeConfigMap();

  mServerList = Config::MakeServerList();
}`,
      language: 'cpp',
      codeEx: 'secondCodeEx',
      label: 'WebServer.cpp'
    },
    {
      code: `class Node {
public:
  Node(std::vector<std::string> &configTokens,
       std::vector<std::string>::iterator &tokenLocation, Node *parent,
       int level);
			 //...

public:
  std::map<std::string, std::vector<std::string> > mDirectives;
  std::vector<Node *> mChildren;

private:
  int mLevel;
  Node *mParent;
};`,
      language: 'cpp',
      codeEx: 'thirdCodeEx',
      label: 'Node.cpp'
    },
    {
      code: `http {
	error_page 404 500 /path/error.html;
	client_max_body_size 1;
	index "index.html";
	autoindex on;
	
	server {
		listen 8080 "default_server";
		server_name yim.com;
		return 307 https://www.google.com;
		
		location / {
			limit_except GET POST;
		}
		location /abc/ {
			alias /var/www;
		}
	}
	
	server {
		listen 80;
		server_name jinheo.com
		
		location / {
			alias /var/www/html;
		}
	}
	
	server {
		listen 255.0.0.0;
		
		location / {
			alias /var/www/html;
		}
	}
}`,
      language: 'conf',
      label: 'example.conf'
    }
  ];

  const [activeCodeIndex, setActiveCodeIndex] = useState(0);

  return (
    <section
      id='config'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='webserv.config' />
      <ImageBox src='/image/webserv/webservConf.png' alt='Webserv config flow' />
      <Content
        project='webserv.config'
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
              project='webserv.config'
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
      <ImageBox src='/image/webserv/webservConfigTree.png' alt='Webserv config tree' />
    </section>
  );
}