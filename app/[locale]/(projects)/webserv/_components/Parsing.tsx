import CodeSection from "@/components/content/CodeSection";
import Content from "@/components/content/Content";
import ImageBox from "@/components/content/ImageBox";
import Title from "@/components/content/Title";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

export default function Parsing() {
  const codeItems: CodeItem[] = [
    {
      code: `void Http::SetRequest(eStatusCode state, std::vector<char> &RecvBuffer) {
	//...
  while (true) {
    eStatusCode ParseState = mRequestParser.Parse(
        mRequest, mBuffer.c_str(), mBuffer.c_str() + mBuffer.size());

    if (ParseState == PARSING_INCOMPLETED) {
	    //...
    } else if (ParseState == PARSING_COMPLETED) {
	    //...
    } else {
	    //...
    }
  }
}`,
      language: "cpp",
      codeEx: "firstCodeEx",
      label: "Http.hpp",
    },
    {
      code: `enum eState {
  RequestMethodStart,
  RequestMethod,
  RequestUriStart,
  RequestUri,
  RequestHttpVersion_h,
  RequestHttpVersion_ht,
  RequestHttpVersion_htt,
  RequestHttpVersion_http,
  RequestHttpVersion_slash,
  RequestHttpVersion_majorStart,
  RequestHttpVersion_major,
  RequestHttpVersion_minorStart,
  RequestHttpVersion_minor,
  //...
};`,
      language: "cpp",
      codeEx: "secondCodeEx",
      label: "Enum.hpp",
    },
    {
      code: `eStatusCode RequestParser::consume(Request &req, const char *begin,
                                   const char *end) {
  while (begin != end) {
    char input = *begin++;

    if (input == '\\0') {
      return PARSING_INCOMPLETED;
    }

    switch (mState) {
    case RequestMethodStart:
      if (!isChar(input) || isControl(input) || isSpecial(input)) {
        return CLIENT_ERROR_BAD_REQUEST;
      } else {
        mState = RequestMethod;
        req.PushBackMethod(input);
      }
      break;
    case RequestMethod:
      //...
    }
  }

  return PARSING_INCOMPLETED;
}`,
      language: "cpp",
      codeEx: "thirdCodeEx",
      label: "RequestParser.cpp",
    },
    {
      code: `class ResponseParser {
public:
  ResponseParser();
  ~ResponseParser();

  std::string MakeResponseMessage(Http &http, eStatusCode state);

  std::string const &GetMessage() const;
  std::vector<char> GetMessageToVector();

private:
  // set mandatory response message
  void setResponse(Http &http, eStatusCode state);
  void setStatusLine(Http &http, eStatusCode state);
  void setMandatoryHeaderFields(Http &http);
  void setCookie(Http &http);
  std::string getStatusMessage(eStatusCode errorStatus);
  std::string getFileType(Http &http);

  // set response message to std::string
  void setMessage(Response &resp);
  void setStatusLine(Response &resp);
  void setHeaderFields(Response &resp);
  void setBody(Response &resp);

private:
  std::string mMessage;
};`,
      language: "cpp",
      codeEx: "fourthCodeEx",
      label: "ResponseParser.hpp",
    }
  ];


  return (
    <section
      id='http parser'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='webserv.parsing' />
      <Content project='webserv.parsing' title='first' content='firstContent' />
      <CodeSection
        project='webserv.parsing'
        codeItems={codeItems}
      />
    </section>
  );
}
