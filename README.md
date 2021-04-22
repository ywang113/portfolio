
# Introduction
TSH website built with Gatsby and Contentful

# Update Content
Go to https://www.contentful.com/, login as scott@thinksmarthealth.com.au

# ContentFul Maintenance Guild
- ![](https://via.placeholder.com/20/619e8d/000000?text=+) `# frequently updated content`
- ![](https://via.placeholder.com/20/f6546a/000000?text=+) `# changes of this field may lead to app crashing. `
- **Header Title** is displayed in the hero part accross all pages.
- **Rich Text** in Contentful is tricky, make sure there are no lines with empty input in Rich Text field. Otherwise a plain "p" tag will be rendered in the page and break the layout.


### Contentful Pages & Fileds
<ul class = "contentful">
  <li>All Pages </li>
  <li> ┃ </li>
  <li> ┣ <strong> About Page - 1 instance </strong> </li>
  <li> ┃ ┣ <span class = "red"> name </span>            <em> "@short text" </em> </li>
  <li> ┃ ┣ Header Title    <em>   "@short text"</em></li>
  <li> ┃ ┣ director        <em>   "@rich text"</em>  </li>
  <li> ┃ ┣ organisation    <em>  "@reference-single"</em></li>
  <li> ┃ ┗ features        <em> "@reference-single"</em></li>
  <li> ┃</li>
  <li> ┣  <strong> Contact Page - 1 instance</li> </strong>
  <li> ┃ ┣ <span class = "red"> name </span>               <em> "@short text" </em>"</li>
  <li> ┃ ┣ Header Title       <em> "@short text" </em>"</li>
  <li> ┃ ┗ components       <em> "@references-many" </em></li>
  <li> ┃</li>
  <li> ┣ <strong> Home Page - 1 instance</li> </strong>
  <li> ┃ ┣ <span class = "red"> name </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ Header Title       <em> "@short text" </em></li>
  <li> ┃ ┣ homePageFeatures  <em>  "@reference-single"</em></li>
  <li> ┃ ┣ About Us           <em> "@short text" </em>  </li>
  <li> ┃ ┗ ourSmarts         <em> "@rich text" </em></li>
  <li> ┃</li>
  <li> ┣ <strong> Services Page - 1 instance</li> </strong>
  <li> ┃ ┣ <span class = "red"> name </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ Header Title       <em> "@short text" </em></li>
  <li> ┃ ┣ features          <em>  "@reference-single"</em></li>
  <li> ┃ ┗ ourServices       <em>   "@rich text"</em></li>
  <li> ┃</li>
  <li> ┣ <strong> Faq Page - 1 instance</li> </strong>
  <li> ┃ ┣ <span class = "red"> name </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ Header Title       <em> "@short text" </em></li>
  <li> ┃ ┗ faqs              <em> "@references-many" </em></li>
  <li> ┃</li>
  <li> ┣ <strong> Downloads Page - 1 instance</li> </strong>
  <li> ┃ ┣ <span class = "red"> name </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ Header Title       <em> "@short text" </em></li>
  <li> ┃ ┗ download          <em> "@references-many" </em></li>
  <li> ┃</li>
  <li> ┣ <strong> <span class = "green"> sub-services Template Page </span - 7 instances</li> </strong>
  <li> ┃&nbsp; <span class = "blue"> Edit instances for different services  <span>  </li>
  <li> ┃ ┣ <span class = "red"> name </span>                <em> "@short text" </em></li>
  <li> ┃ ┣ Header Title       <em> "@short text" </em></li>
  <li> ┃ ┣ <span class = "red"> slug </span>               <em>  "@reference-single"</em></li>
  <li> ┃ ┗ <span class = "green"> content </span>           <em> "@rich text" </em></li>
</ul>

  ### ContentFul Components & their fields
<ul class = "contentful">
  <li>All Components </li>
  <li> ┃ </li>
  <li> ┣ <strong> Banner - 1 instance </strong> # Used by All Pages </li>
  <li> ┃ ┣ <span class = "red"> name </span>            <em> "@short text" </em> </li>
  <li> ┃ ┗ Banner-Hero        <em> "@rich text"</em></li>
  <li> ┃</li>
  <li> ┣  <strong> Card - 1 instance  </strong>  # Used by FAQ, Downloads, Template Pages. </li>
  <li> ┃ ┣ <span class = "red"> name </span>               <em> "@short text" </em>"</li>
  <li> ┃ ┣ title       <em> "@short text" </em>"</li>
  <li> ┃ ┗ links       <em> "@references-many ~ to Links" </em></li>
  <li> ┃</li>
  <li> ┣ <strong> Contact Us Info - 4 instances</strong>  # Used by Contact Page. </li>
  <li> ┃ ┣ <span class = "red"> name </span>                <em> "@short text" </em></li>
  <li> ┃ ┣ title       <em> "@short text" </em></li>
  <li> ┃ ┣ description       <em> "@short text" </em></li>
  <li> ┃ ┗ svgLogo         <em> "@media" </em></li>
  <li> ┃</li>
  <li> ┣ <strong> <span class = "green"> Download-Links </span> - 1 instance</strong> # Used by Contact Page  </li>
  <li> ┃&nbsp;&nbsp; <span class = "blue"> Change / add this content for creating new download assets  <span>  </li>
  <li> ┃ ┣ <span class = "red"> name </span>              <em> "@short text" </em></li>
  <li> ┃ ┣ title       <em> "@short text" </em></li>
  <li> ┃ ┣ desc          <em>  "@list of short text"</em></li>
  <li> ┃ ┗ asset       <em>   "@media"</em></li>
  <li> ┃</li>
  <li> ┣ <strong> Feature - 4 instances </strong> # Used by Features </li>
  <li> ┃ ┣ title               <em> "@short text" </em></li>
  <li> ┃ ┣ description      <em> "@short text" </em></li>
  <li> ┃ ┣ photo      <em> "@short text" </em></li>
  <li> ┃ ┗ <span class = "red"> displayOrder </span>        <em> "@Int, unique" </em></li>
  <li> ┃</li>
  <li> ┣ <strong> Feature-List - 2 instance </strong> #Used by Home, About, Services Page  </li>
  <li> ┃ ┣ <span class = "red"> name </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ title       <em> "@short text" </em></li>
  <li> ┃ ┣ description       <em> "@short text" </em></li>
  <li> ┃ ┗ features          <em> "@rich text" </em></li>
  <li> ┃</li>
  <li> ┣ <strong> Footer - 1 instance</strong> # Used by All Pages </li>
  <li> ┃&nbsp;&nbsp; <span class = "blue"> Add embed links in Terms & Conditions field for more terms & policies  <span>  </li>
  <li> ┃ ┣ <span class = "red"> name </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ Logo       <em> "@media" </em></li>
  <li> ┃ ┣ Our Services              <em>  "@rich text"</em></li>
  <li> ┃ ┣ Resources              <em>  "@rich text"</em></li>
  <li> ┃ ┗ <span class = "green"> Terms & Conditions </span>          <em> "@rich text" </em></li>
    <li> ┃</li>
  <li> ┣ <strong> <span class = "green"> Frequent Asked Questions </span> - 3 instances</strong>   # Used by Faq Page</li>
  <li> ┃&nbsp;&nbsp; <span class = "blue"> Change / Add contents for more faqs  <span>  </li>
  <li> ┃ ┣ <span class = "red"> name </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ question       <em> "@short text" </em></li>
  <li> ┃ ┗  answer              <em>  "@list of short text"</em></li>
  <li> ┃</li>
  <li> ┣ <strong> Links - 13 instance</strong> # Used by Footer, Card, Our-Services </li>
  <li> ┃&nbsp;&nbsp; <span class = "blue"> Links for footer, card...  <span>  </li>
  <li> ┃ ┣ <span class = "red"> title </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ <span class = "red"> slug </span>       <em> "@short text" </em></li>
  <li> ┃ ┣ <span class = "red"> isExternal </span>            <em>  "@boolean"</em></li>
  <li> ┃ ┣ url              <em>  "@rich text"</em></li>
  <li> ┃ ┗ <span class = "red"> displayOrder </span>         <em> "@Int, unique" </em></li>
  <li> ┃</li>
  <li> ┣ <strong> Navigation - 7 instance</strong> # Used by React Navigation Component </li>
  <li> ┃&nbsp;&nbsp; <span class = "blue"> Used for navigation menu only, not connected to other content   <span>  </li>
  <li> ┃ ┣ <span class = "red"> title </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ <span class = "red"> slug </span>       <em> "@short text" </em></li>
  <li> ┃ ┣ <span class = "red"> isButton </span>            <em>  "@boolean"</em></li>
  <li> ┃ ┗ <span class = "red"> displayOrder </span>         <em> "@Int, unique" </em></li>
  <li> ┃</li>
  <li> ┣ <strong> orgDESC - 1 instance</strong> # Used by About Page </li>
  <li> ┃&nbsp;&nbsp; <span class = "blue"> change text field to update 'about tsh' part in About Page  <span>  </li>
  <li> ┃ ┣ <span class = "red"> name </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ <span class = "red"> bg-img </span>       <em> "@media" </em></li>
  <li> ┃ ┗ <span class = "green"> text </span>            <em>  "@short text"</em></li>
  <li> ┃</li>
  <li> ┣ <strong> Our-Service - 8 instance</strong> # Used by Services Page & Home Page </li>
  <li> ┃&nbsp;&nbsp; <span class = "blue"> Changes will update our services cotent displayed in Home , Services Page <span>  </li>
  <li> ┃ ┣ <span class = "red"> title </span>               <em> "@short text" </em></li>
  <li> ┃ ┣ <span class = "red"> slug </span>       <em> "@short text" </em></li>
  <li> ┃ ┣ <span class = "red"> isButton </span>            <em>  "@boolean"</em></li>
  <li> ┃ ┗ <span class = "red"> displayOrder </span>         <em> "@Int, unique" </em></li>
</ul>

<style>
ul.contentful{
  display:block;
}
ul.contentful li{
  width:550px;
  list-style:none !important;
  position:relative;
}

ul.contentful em{
  position:absolute;
  top:0;
  right:0;
  margin-left:50px;
  font-style: initial;
}

ul.contentful strong{
  font-size:16px;
}

span.red{
    color:#f6546a;
}
span.yellow{
    color:yellow;
}
span.green{
    color:#619e8d;
}
span.blue{
  color:#6897bb;
  font-size:14px;
}
</style>
