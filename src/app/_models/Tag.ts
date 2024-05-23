export class Tag {
    // Some basic languages and technologies
    static readonly ANGULAR = new Tag('Angular', '#D32F2F');
    static readonly REACT = new Tag('React', '#1976D2');
    static readonly VUE = new Tag('Vue', '#388E3C');
    static readonly SVELTE = new Tag('Svelte', '#F57C00');
    static readonly TYPESCRIPT = new Tag('TypeScript', '#1976D2');
    static readonly JAVASCRIPT = new Tag('JavaScript', '#FBC02D');
    static readonly NODEJS = new Tag('Node.js', '#388E3C');
    static readonly FIREBASE = new Tag('Firebase', '#F57C00');
    static readonly VUETIFY = new Tag('Vuetify', '#1976D2');
    static readonly SAPPER = new Tag('Sapper', '#7B1FA2');
    static readonly EXPRESS = new Tag('Express', '#616161');
    static readonly MONGODB = new Tag('MongoDB', '#388E3C');
    static readonly PYTHON = new Tag('Python', '#1976D2');
    static readonly DJANGO = new Tag('Django', '#388E3C');
    static readonly FLASK = new Tag('Flask', '#424242');
    static readonly RUBY = new Tag('Ruby', '#D32F2F');
    static readonly RAILS = new Tag('Rails', '#D32F2F');
    static readonly JAVA = new Tag('Java', '#D32F2F');
    static readonly CSHARP = new Tag('CSharp', '#D32F2F');
    static readonly SPRING = new Tag('Spring', '#388E3C');
    static readonly KOTLIN = new Tag('Kotlin', '#7B1FA2');
    static readonly SWIFT = new Tag('Swift', '#F57C00');
    static readonly REACTNATIVE = new Tag('React Native', '#1976D2');
    static readonly EXPO = new Tag('Expo', 'gray');
    static readonly VUFORIA = new Tag('Vuforia', 'green');
    static readonly UNITY = new Tag('Unity', '#1976D2');


    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}
