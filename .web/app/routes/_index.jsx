import {Fragment,lazy,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Code as RadixThemesCode,Container as RadixThemesContainer,Flex as RadixThemesFlex,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,Separator as RadixThemesSeparator,Slider as RadixThemesSlider,Text as RadixThemesText,TextArea as RadixThemesTextArea,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {Moon as LucideMoon,Star as LucideStar,Sun as LucideSun} from "lucide-react"
import {ClientSide,ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isTrue} from "$/utils/state"
import {Link as ReactRouterLink} from "react-router"
import "gridjs/dist/theme/mermaid.css"
import {jsx} from "@emotion/react"

const DataTableGrid = ClientSide(lazy(() => import('gridjs-react').then((mod) => ({default: mod.Grid}))))


function Button_1bff2664f5dc1a8165e7f69f9daa568d () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_90be1d32f3e352b1e39d093d6c75974b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sample_reflex___sample_reflex____state.view_home", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["width"] : "100%", ["justifyContent"] : "flex-start" }),onClick:on_click_90be1d32f3e352b1e39d093d6c75974b,variant:((reflex___state____state__sample_reflex___sample_reflex____state.current_view_rx_state_?.valueOf?.() === "home"?.valueOf?.()) ? "solid" : "soft")},"Home")
  )
}


function Button_fda21f1ae46508da6f1a0ad2da52b0d8 () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_bfc840dfd81bc98e4324366b38e3cf06 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sample_reflex___sample_reflex____state.view_contact", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["width"] : "100%", ["justifyContent"] : "flex-start" }),onClick:on_click_bfc840dfd81bc98e4324366b38e3cf06,variant:((reflex___state____state__sample_reflex___sample_reflex____state.current_view_rx_state_?.valueOf?.() === "contact"?.valueOf?.()) ? "solid" : "soft")},"Contact")
  )
}


function Button_c775a8969dc47c8782d9a2ed9b12c99a () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4a886a64fe40228c372bf64fb406347e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sample_reflex___sample_reflex____state.view_feedback", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["width"] : "100%", ["justifyContent"] : "flex-start" }),onClick:on_click_4a886a64fe40228c372bf64fb406347e,variant:((reflex___state____state__sample_reflex___sample_reflex____state.current_view_rx_state_?.valueOf?.() === "feedback"?.valueOf?.()) ? "solid" : "soft")},"Feedback")
  )
}


function Button_ede9a9bd48a35bfc44be6fa2c90b2bba () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9cddbe2631e755cfa62b1e9a249e8f00 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sample_reflex___sample_reflex____state.view_signup", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["width"] : "100%", ["justifyContent"] : "flex-start" }),onClick:on_click_9cddbe2631e755cfa62b1e9a249e8f00,variant:((reflex___state____state__sample_reflex___sample_reflex____state.current_view_rx_state_?.valueOf?.() === "signup"?.valueOf?.()) ? "solid" : "soft")},"Sign Up")
  )
}


function Button_d948b8a460f719510de4ff4134351779 () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_da99ddde598df0437272d432324d1b15 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sample_reflex___sample_reflex____state.view_data", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["width"] : "100%", ["justifyContent"] : "flex-start" }),onClick:on_click_da99ddde598df0437272d432324d1b15,variant:((reflex___state____state__sample_reflex___sample_reflex____state.current_view_rx_state_?.valueOf?.() === "data"?.valueOf?.()) ? "solid" : "soft")},"Data")
  )
}


function Fragment_4eccfd74653df2c248da64de2d1cc715 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(Fragment,{},((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.())?(jsx(Fragment,{},jsx(LucideSun,{},))):(jsx(Fragment,{},jsx(LucideMoon,{},)))))
  )
}


function Iconbutton_3bedd826d25a324edade2a6a1f71ed90 () {
  const { toggleColorMode } = useContext(ColorModeContext)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, ReflexEvent, toggleColorMode])

  return (
    jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px", ["position"] : "fixed", ["top"] : "2rem", ["right"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) }),onClick:on_click_9922dd3e837b9e087c86a2522c2c93f8},jsx(Fragment_4eccfd74653df2c248da64de2d1cc715,{},))
  )
}


function Button_ad094c8ae5ab79299be32139126add8d () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_1d1cdb83886bdce845419c05548bc814 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sample_reflex___sample_reflex____state.submit_contact", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{loading:reflex___state____state__sample_reflex___sample_reflex____state.submitting_contact_rx_state_,onClick:on_click_1d1cdb83886bdce845419c05548bc814},"Submit")
  )
}


function Text_de7cf5ab55777c842ac00d4a546458cd () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)



  return (
    jsx(RadixThemesText,{as:"p"},reflex___state____state__sample_reflex___sample_reflex____state.contact_result_rx_state_)
  )
}


function Button_60993ad9f1868a9c03109fb14dba4068 () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6fc699e7b053e41bb54c84cf2ba0e49f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sample_reflex___sample_reflex____state.submit_feedback", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{loading:reflex___state____state__sample_reflex___sample_reflex____state.submitting_feedback_rx_state_,onClick:on_click_6fc699e7b053e41bb54c84cf2ba0e49f},"Send Feedback")
  )
}


function Text_b466216351794bd52817a81ca6f03617 () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)



  return (
    jsx(RadixThemesText,{as:"p"},reflex___state____state__sample_reflex___sample_reflex____state.feedback_result_rx_state_)
  )
}


function Button_3a8ff6dfd906be1a255ec67ba3928509 () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_dad005d901ec957865cbc6e7279f8d62 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sample_reflex___sample_reflex____state.submit_signup", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{loading:reflex___state____state__sample_reflex___sample_reflex____state.submitting_signup_rx_state_,onClick:on_click_dad005d901ec957865cbc6e7279f8d62},"Create Account")
  )
}


function Text_1772ac33dc34db646ab84ac7808ec01f () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)



  return (
    jsx(RadixThemesText,{as:"p"},reflex___state____state__sample_reflex___sample_reflex____state.signup_result_rx_state_)
  )
}


function Fragment_0875b743780adfb0ccc93dc78d28ce57 () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)



  return (
    jsx(Fragment,{},((reflex___state____state__sample_reflex___sample_reflex____state.current_view_rx_state_?.valueOf?.() === "data"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "stretch", ["width"] : "100%" }),direction:"column",gap:"4"},jsx(RadixThemesHeading,{size:"6"},"User Data"),jsx(RadixThemesText,{as:"p"},"Sample user accounts loaded from CSV."),jsx(DataTableGrid,{columns:["id", "first_name", "last_name", "email", "signup_date", "plan"],data:[[1, "Alice", "Nguyen", "alice@example.com", "2025-01-02", "Pro"], [2, "Bob", "Smith", "bob@example.com", "2025-01-05", "Free"], [3, "Carol", "Jones", "carol@example.com", "2025-02-14", "Pro"], [4, "David", "Lee", "david@example.com", "2025-03-01", "Business"], [5, "Eva", "Martinez", "eva@example.com", "2025-03-22", "Free"]],pagination:true,resizable:false,search:true,sort:true},)))):(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "stretch", ["width"] : "100%" }),direction:"column",gap:"4"},jsx(RadixThemesHeading,{size:"6"},"User Data"),jsx(RadixThemesText,{as:"p"},"Sample user accounts loaded from CSV."),jsx(DataTableGrid,{columns:["id", "first_name", "last_name", "email", "signup_date", "plan"],data:[[1, "Alice", "Nguyen", "alice@example.com", "2025-01-02", "Pro"], [2, "Bob", "Smith", "bob@example.com", "2025-01-05", "Free"], [3, "Carol", "Jones", "carol@example.com", "2025-02-14", "Pro"], [4, "David", "Lee", "david@example.com", "2025-03-01", "Business"], [5, "Eva", "Martinez", "eva@example.com", "2025-03-22", "Free"]],pagination:true,resizable:false,search:true,sort:true},))))))
  )
}


function Fragment_4c91ae464971eb861d5f5d3d0a6146aa () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)



  return (
    jsx(Fragment,{},((reflex___state____state__sample_reflex___sample_reflex____state.current_view_rx_state_?.valueOf?.() === "signup"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "stretch", ["width"] : "100%" }),direction:"column",gap:"4"},jsx(RadixThemesBox,{css:({ ["marginBottom"] : "0.5rem" })},jsx(RadixThemesHeading,{size:"6"},"Create an account"),jsx(RadixThemesText,{as:"p"},"\u2022 Email: We'll use this for login and notifications."),jsx(RadixThemesText,{as:"p"},"\u2022 Password: At least 8 characters for security."),jsx(RadixThemesSeparator,{css:({ ["marginTop"] : "8px" }),size:"4"},)),jsx(RadixThemesTextField.Root,{placeholder:"Email",type:"email"},),jsx(RadixThemesTextField.Root,{placeholder:"Password",type:"password"},),jsx(Button_3a8ff6dfd906be1a255ec67ba3928509,{},),jsx(Text_1772ac33dc34db646ab84ac7808ec01f,{},)))):(jsx(Fragment_0875b743780adfb0ccc93dc78d28ce57,{},))))
  )
}


function Fragment_32f2a633093e874ee28ab61bfb6c4e03 () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)



  return (
    jsx(Fragment,{},((reflex___state____state__sample_reflex___sample_reflex____state.current_view_rx_state_?.valueOf?.() === "feedback"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "stretch", ["width"] : "100%" }),direction:"column",gap:"4"},jsx(RadixThemesBox,{css:({ ["marginBottom"] : "0.5rem" })},jsx(RadixThemesHeading,{size:"6"},"Feedback"),jsx(RadixThemesText,{as:"p"},"\u2022 Rating: 1 (poor) to 10 (excellent)."),jsx(RadixThemesText,{as:"p"},"\u2022 Comments: Optional details to help us improve."),jsx(RadixThemesSeparator,{css:({ ["marginTop"] : "8px" }),size:"4"},)),jsx(RadixThemesSlider,{css:({ ["width"] : "100%" }),defaultValue:[5],max:10,min:1,step:1,width:"100%"},),jsx(RadixThemesTextArea,{css:({ ["& textarea"] : null }),placeholder:"Comments"},),jsx(Button_60993ad9f1868a9c03109fb14dba4068,{},),jsx(Text_b466216351794bd52817a81ca6f03617,{},)))):(jsx(Fragment_4c91ae464971eb861d5f5d3d0a6146aa,{},))))
  )
}


function Fragment_a181f4eb4b67ea1b2095e0a6971b98ef () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)



  return (
    jsx(Fragment,{},((reflex___state____state__sample_reflex___sample_reflex____state.current_view_rx_state_?.valueOf?.() === "contact"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "stretch", ["width"] : "100%" }),direction:"column",gap:"4"},jsx(RadixThemesBox,{css:({ ["marginBottom"] : "0.5rem" })},jsx(RadixThemesHeading,{size:"6"},"Contact form"),jsx(RadixThemesText,{as:"p"},"\u2022 Name: What we should call you."),jsx(RadixThemesText,{as:"p"},"\u2022 Email: A valid address so we can reply."),jsx(RadixThemesText,{as:"p"},"\u2022 Message: Your question or request."),jsx(RadixThemesSeparator,{css:({ ["marginTop"] : "8px" }),size:"4"},)),jsx(RadixThemesTextField.Root,{placeholder:"Name"},),jsx(RadixThemesTextField.Root,{placeholder:"Email",type:"email"},),jsx(RadixThemesTextArea,{css:({ ["& textarea"] : null }),placeholder:"Message"},),jsx(Button_ad094c8ae5ab79299be32139126add8d,{},),jsx(Text_de7cf5ab55777c842ac00d4a546458cd,{},)))):(jsx(Fragment_32f2a633093e874ee28ab61bfb6c4e03,{},))))
  )
}


function Fragment_95a45be1952b5af8b2f7f29a7d6a3817 () {
  const reflex___state____state__sample_reflex___sample_reflex____state = useContext(StateContexts.reflex___state____state__sample_reflex___sample_reflex____state)



  return (
    jsx(Fragment,{},((reflex___state____state__sample_reflex___sample_reflex____state.current_view_rx_state_?.valueOf?.() === "home"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["minHeight"] : "85vh" }),direction:"column",justify:"center",gap:"5"},jsx(RadixThemesHeading,{size:"9"},"Welcome to Reflex!"),jsx(RadixThemesText,{as:"p",size:"5"},"Get started by editing ",jsx(RadixThemesCode,{},"sample_reflex/sample_reflex.py")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{target:(true ? "_blank" : ""),to:"https://reflex.dev/docs/getting-started/introduction/"},jsx(RadixThemesButton,{},"Check out our docs!")))))):(jsx(Fragment_a181f4eb4b67ea1b2095e0a6971b98ef,{},))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "stretch", ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesBox,{css:({ ["width"] : "240px", ["padding"] : "1rem", ["borderRight"] : "1px solid", ["borderColor"] : "gray.200", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "stretch" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"2"},jsx(LucideStar,{css:({ ["color"] : "gold" }),size:24},),jsx(RadixThemesHeading,{size:"6"},"Menu")),jsx(Button_1bff2664f5dc1a8165e7f69f9daa568d,{},),jsx(Button_fda21f1ae46508da6f1a0ad2da52b0d8,{},),jsx(Button_c775a8969dc47c8782d9a2ed9b12c99a,{},),jsx(Button_ede9a9bd48a35bfc44be6fa2c90b2bba,{},),jsx(Button_d948b8a460f719510de4ff4134351779,{},))),jsx(RadixThemesContainer,{css:({ ["padding"] : "2rem", ["flex"] : "1" }),size:"3"},jsx(Iconbutton_3bedd826d25a324edade2a6a1f71ed90,{},),jsx(RadixThemesFlex,{css:({ ["width"] : "100%" }),justify:"center"},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["maxWidth"] : "720px" })},jsx(Fragment_95a45be1952b5af8b2f7f29a7d6a3817,{},))))),jsx("title",{},"SampleReflex | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}