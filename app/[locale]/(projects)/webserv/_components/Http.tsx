import Code from "@/components/content/Code";
import Content from "@/components/content/Content";
import ImageBox from "@/components/content/ImageBox";
import Title from "@/components/content/Title";

export default function Http() {
  const codeItems = {
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
  };

  return (
    <section
      id='request response'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='webserv.http' />
      <Content project='webserv.http' title='first' content='firstContent' />
      <Code
        code={codeItems.code}
        language={codeItems.language}
        project='webserv.http'
      />
      <Content project='webserv.http' title='second' content='secondContent' />
      <Content project='webserv.http' title='third' content='thirdContent' />
      <ImageBox
        src='/image/webserv/webservHttp.png'
        alt='Webserv request response flow'
      />
    </section>
  );
}
