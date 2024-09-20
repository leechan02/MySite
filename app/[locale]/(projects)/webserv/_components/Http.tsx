import CodeSection from "@/components/content/CodeSection";
import Content from "@/components/content/Content";
import ImageBox from "@/components/content/ImageBox";
import Title from "@/components/content/Title";
import { useState } from "react";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

export default function Http() {
  const codeItems: CodeItem[] = [
    {
      code: `class Http {
public:
  Http(int socket, int port, std::string &sendBuffer, bool &keepAlive,
       int &remainingRequest);
//...
private:
  std::string mBuffer;
  Request mRequest;
  Response mResponse;
  RequestParser mRequestParser;
  ResponseParser mResponseParser;

  int mPort;
  int mSocket;
  bool &mKeepAlive;
  int &mRemainingRequest;
  std::string &mSendBufferRef;
  std::vector<SharedPtr<CGI> > mCGIList;
};`,
      language: "cpp",
      label: "Http.hpp",
    },
    {
      code: `class GetHandler : public IRequestHandler {
public:
  virtual void Handle(Http &http);
	//...
};

class PostHandler : public IRequestHandler {
public:
  virtual void Handle(Http &http);
};

class DeleteHandler : public IRequestHandler {
public:
  virtual void Handle(Http &http);
};`,
      language: "cpp",
      label: "Http.cpp",
    }
  ];


  return (
    <section
      id='request response'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='webserv.http' />
      <Content project='webserv.http' title='first' content='firstContent' />
      <Content project='webserv.http' title='second' content='secondContent' />
      <CodeSection
        project='webserv.http'
        codeItems={codeItems}
      />
      <Content project='webserv.http' title='third' content='thirdContent' />
      <ImageBox
        src='/image/webserv/webservHttp.png'
        alt='Webserv request response flow'
      />
    </section>
  );
}
