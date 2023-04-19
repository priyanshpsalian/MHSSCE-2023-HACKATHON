import React from "react";
/** Add Route Component */
//Home Section
const Layout1 =  React.lazy(() => import("../pages/Home/Layout1/Layout1"));
const Layout2 =  React.lazy(() => import("../pages/Home/Layout2/Layout2"));
const Layout3 =  React.lazy(() => import("../pages/Home/Layout3/Layout3"));

//Company Section
const AboutUs =  React.lazy(() => import("../pages/Company/AboutUs/AboutUs"));
const Services =  React.lazy(() => import("../pages/Company/Services/Services"));
const Team =  React.lazy(() => import("../pages/Company/Team/Team"));
const Pricing =  React.lazy(() => import("../pages/Company/Pricing/Pricing"));
const PrivacyAndPolicy =  React.lazy(() => import("../pages/Company/PrivacyAndPolicy/PrivacyAndPolicy"));
const Faqs =  React.lazy(() => import("../pages/Company/Faqs/Faqs"));

//Jobs Section
const JobList =  React.lazy(() => import("../pages/Jobs/JobList/JobList"));
const JobList2 =  React.lazy(() => import("../pages/Jobs/JobList2/JobList2"));
const JobGrid =  React.lazy(() => import("../pages/Jobs/JobGrid/JobGrid"));
const JobGrid2 =  React.lazy(() => import("../pages/Jobs/JobGrid2/JobGrid2"));
const JobDetails =  React.lazy(() => import("../pages/Jobs/JobDetails/JobDetails"));
const JobsCategories =  React.lazy(() => import("../pages/Jobs/JobsCategories/JobsCategories"));

//Candidate and Company Section
const CandidateList =  React.lazy(() => import("../pages/CandidateAndCompany/CandidateList/CandidateList"));
const CandidateGrid =  React.lazy(() => import("../pages/CandidateAndCompany/CandidateGrid/CandidateGrid"));
const CandidateDetails =  React.lazy(() => import("../pages/CandidateAndCompany/CandidateDetails/CandidateDetails"));
const CompanyList =  React.lazy(() => import("../pages/CandidateAndCompany/CompanyList/CompanyList"));
const CompanyDetails =  React.lazy(() => import("../pages/CandidateAndCompany/CompanyDetails/CompanyDetails"));

//Blog Section
const Blog =  React.lazy(() => import("../pages/Blog/Blog/Blog"));
const BlogGrid =  React.lazy(() => import("../pages/Blog/BlogGrid/BlogGrid"));
const BlogModern =  React.lazy(() => import("../pages/Blog/BlogModern/BlogModern"));
const BlogMasonary =  React.lazy(() => import("../pages/Blog/BlogMasonary/BlogMasonary"));
const BlogDetails =  React.lazy(() => import("../pages/Blog/BlogDetails/BlogDetails"));
const BlogAuther =  React.lazy(() => import("../pages/Blog/BlogAuther/BlogAuther"));

//const Contacts 
const Contact =  React.lazy(() => import("../pages/Contact/UserReqire"));
const EditProfile = React.lazy(() => import("../pages/Profile/Edit Profile/EditProfile.js"));

//const AuthPages
const SignIn =  React.lazy(() => import("../pages/ExtraPages/SignIn"));
const SignUp =  React.lazy(() => import("../pages/ExtraPages/SignUp"));
const SignOut =  React.lazy(() => import("../pages/ExtraPages/SignOut"));
const ResetPassword =  React.lazy(() => import("../pages/ExtraPages/ResetPassword"));
const ComingSoon =  React.lazy(() => import('../pages/ExtraPages/ComingSoon'));
const Error404 =  React.lazy(() => import("../pages/ExtraPages/Error404"));
const Components =  React.lazy(() => import("../pages/ExtraPages/Components/Components"));

//profile section(User Profile)
const BookMarkJobPost =  React.lazy(() => import("../pages/Profile/BookMarkJobPost/BookMarkJobPost"));
const ManageJobs =  React.lazy(() => import("../pages/Profile/ManageJobs/ManageJobs"));
const BookMarkJobs =  React.lazy(() => import("../pages/Profile/BookMarkJobs/BookMarkJobs"));
const MyProfile =  React.lazy(() => import("../pages/Profile/MyProfile/MyProfile"));


const userRoutes = [

  //profile Section(User Profile)
  { path: "/bookmarkjobpost", component: BookMarkJobPost },
  { path: "/myprofile", component: MyProfile   },
  { path: "/bookmarkjobs", component: BookMarkJobs },
  { path: "/managejobs", component: ManageJobs },

  //Components Section(Extra Pages)
  { path: "/components", component: Components },

  //Contact
  { path : "/job-requirements", component: Contact },
  { path : "/edit-profile", component: EditProfile },

  // Blog Section
  { path : "/blogauther", component: BlogAuther },
  { path : "/blogdetails", component: BlogDetails },
  { path : "/blogmodern", component: BlogModern },
  { path : "/blogmasonary", component: BlogMasonary },
  { path : "/bloggrid", component: BlogGrid },
  { path : "/blog", component: Blog },

  //Tips section
  { path : "/get-tips", component: BlogAuther },

  //Candidate and Company Section
  { path : "/companydetails", component: CompanyDetails },
  { path : "/companylist", component: CompanyList },
  { path : "/candidatedetails", component: CandidateDetails },
  { path : "/candidategrid", component: CandidateGrid },
  { path : "/candidatelist", component: CandidateList },

  //Jobs Section
  { path : "/jobscategories", component: JobsCategories },
  { path : "/jobdetails", component: JobDetails },
  { path : "/jobgrid2", component: JobGrid2 },
  { path : "/jobgrid", component: JobGrid },
  { path : "/joblist2", component: JobList2 },
  { path : "/joblist", component: JobList },

  //Company Section  
  { path : "/faqs", component: Faqs },
  { path : "/privacyandpolicy", component: PrivacyAndPolicy },
  { path : "/pricing", component: Pricing },
  { path : "/team", component: Team },
  { path : "/services", component: Services },
  { path : "/aboutus", component: AboutUs },

  //Home Section
  { path : "/layout3", component: Layout3 },
  { path : "/layout2", component: Layout2 },
  { path : "/", component: Layout1 },
];

const authRoutes = [    
  { path: "/error404", component: Error404 },
  { path: "/comingsoon", component: ComingSoon }, 
  { path: "/resetpassword", component: ResetPassword }, 
  { path: "/signout", component: SignOut }, 
  { path: "/signup", component: SignUp },  
  { path: "/signin", component: SignIn },  
];
export { userRoutes, authRoutes };
