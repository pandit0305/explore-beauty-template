const light = {
    color: 'text.primary',
}
export const styles = {
    //header
    logo: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: light.color,
        textDecoration: 'none',
    },
    logoX: {
        color: light.color,
    },
    x: {
        color: light.color,
    },
    titleButton: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
    menu: {
        display: { xs: 'block', md: 'none' },
    },
    mobileLogo: {
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: light.color,
        textDecoration: 'none',
    },
    mobileMenu: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
    mobileBtn: { my: 2, color: light.color, display: 'block' },
    iconBtn: { p: 0 },
    menuTop: { mt: '45px' },
    profileImage: { width: '35px', height: '35px', border: '1px solid black', borderRadius: '50%' },

    //home page
    homeContainer: { width: '90%', margin: 'auto' },
    homeImage: { width: '100%', margin: 'auto', height: '100vh', borderRadius: '25px' },
    mt50: { marginTop: '50px' },
    homeButtonBox: { width: '90%', margin: 'auto', marginTop: '10%' },
    homeBtn: { my: 2, color: light.color, margin: '5px', border: '1px solid black' },
    footerForm: { display: 'flex', justifyContent: 'center', paddingBottom: '10px', marginTop: '30px' },
    formBox: {
        padding: '20px', border: '1px solid black', borderRadius: '10px', transition: 'all 0.3s ease-in',
        "&:hover": { boxShadow: 'rgba(255, 255, 255, 0.35) 0px 5px 15px' }
    },
    heading: {
        color: light.color,
        textAlign: 'center',
        marginTop: "30px",
        marginBottom: "30px"
    },
    textField: { marginTop: '25px', color: light.color },
    errorText: { position: 'absolute', fontSize: '10px', marginLeft: '10px', marginTop: '5px', color: 'red' },
    actionBtn: { marginTop: '25px' },
    homeTitle: {
        color: light.color,
        textAlign: 'center',
        marginTop: "0px",
        marginBottom: "20px"
    },
    paper: { padding: '20px' },
    arrow: {
        float: 'right',
        cursor: 'pointer',
        marginTop: "-10px",
        color: light.color,
        border: '1px solid black',
        boxShadow: 'rgba(255, 255, 255, 0.5) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        transition: 'all 0.3s ease-in',
        borderRadius: '50%', "&:hover": {
            boxShadow: 'rgba(255, 255, 255, 0.35) 0px 5px 15px'
        }
    },
    social:{position:'fixed', zIndex:'1000', right:'30px', top:'60%'},
}