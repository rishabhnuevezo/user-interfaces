
const general = {
}


const app = {
    title: 'PlaceOS',
    description: 'Room Control UI',
    short_name: 'PlaceOS',
    logo_dark: {

    },
    general
}

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/control',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app
};