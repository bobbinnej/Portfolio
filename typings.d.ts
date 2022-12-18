interface SanityBody {
_createdAt:string;
_id:string;
_rev:string;
_updatedAt:string;
}

interface Image {
    _type: "image";
    asset:{
        _ref: string;
        _type: "reference";
    }
}

// social
export interface Social extends SanityBody{
    _type:"social";
    title:string;
    url:string;

}

//pageInfo
export interface PageInfo extends SanityBody{
    _type:"pageInfo";
    address:string;
    backgroundInformation:string;
    email:string;
    role:string;
    heroImage:Image;
    name:string;
    phoneNumber:string;
    profilePic:Image;

}

// technology
export interface Technology extends SanityBody{
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
}

// skill
export interface Skill extends SanityBody{
   _type:"skill";
   image:Image;
   progress:number;
   title:string;
  
}

//project
export interface Project extends SanityBody{
    _type:"project";
    title:string;
    image:Image;
    summary:string;
    technologies:Technology[];
    linkToBuild:string;
}

// experience
export interface Experience extends SanityBody{
    _type:"experience";
    companyImage:Image;
    company:string;
    dateStarted:date;
    dateEnded:Date;
    isCurrentlyWorkingHere:boolean;
    jobTitle:string;
    technologies:[Technology];
    points:string[];
    
}


