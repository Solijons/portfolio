class ConfigError extends Error {
    constructor(mesg: string) {
        super(mesg);
        this.name = 'ConfigError';
    }
}

export default ConfigError;
