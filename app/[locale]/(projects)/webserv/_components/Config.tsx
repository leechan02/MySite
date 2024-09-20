"use client";

import Content from "@/components/content/Content";
import Title from "@/components/content/Title";
import ImageBox from "@/components/content/ImageBox";
import CodeSection from "@/components/content/CodeSection";

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

  const codeItems2: CodeItem[] = [
    {
      code: `class ConfigMap {
public:
  typedef std::map<std::string, Node *> UriMap;
  typedef std::multimap<std::string, UriMap>
      HostnameMap; // Allows duplicate hostnames

  ConfigMap(Node *configTree);
	//...

private:
  class PortMap {
	//...
  private:
    HostnameMap mHostnameConfigs;
    UriMap *mDefaultServer; // pointer to default server config
    bool mbDefaultServerSet;
  };

  std::map<int, PortMap> mPortConfigs;
};`,
      language: 'cpp',
      codeEx: 'fourthCodeEx',
      label: 'ConfigMap.hpp'
    },
    {
      code: `Node *ConfigMap::PortMap::miniPCRE(UriMap *uriConfigs, const std::string uri) {
	//...
  for (UriMap::iterator it = uriConfigs->begin(); it != uriConfigs->end();
       ++it) {
       // '~' '*' '$' check
  }
  return longestMatchedNode;
}`,
      language: 'cpp',
      codeEx: 'fifthCodeEx',
      label: 'ConfigMap.cpp'
    },
    {
      code: `	location ~*.py {
		cgi_pass ./YoupiBanane/cookieTest.py;
		limit_except GET POST;
	}

	location ~*/cgi-bin/ {
		cgi_pass ./cgi_tester;
	}`,
      language: 'conf',
      codeEx: 'sixthCodeEx',
      label: 'example.conf'
    },
    {
      code: `void Http::ErrorHandle(eStatusCode errorStatus) {
  Node *location = Common::mConfigMap->GetConfigNode(
      mPort, mRequest.GetHost(), mRequest.GetUri());

  std::vector<std::string> configErrorPageValues =
      location->FindValue(location, "error_page");

	//...

  ReadFile(DEFAULT_ERROR_PAGE_PATH);
  SendResponse(errorStatus);
}`,
      language: 'cpp',
      codeEx: 'seventhCodeEx',
      label: 'Http.cpp'
    }
  ];

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
      <CodeSection codeItems={codeItems} project="webserv.config" />
      <ImageBox src='/image/webserv/webservConfigTree.png' alt='Webserv config tree' />
      <Content
        project='webserv.config'
        title='second'
        content='secondContent'
      />
      <CodeSection codeItems={codeItems2} project="webserv.config" />
    </section>
  );
}