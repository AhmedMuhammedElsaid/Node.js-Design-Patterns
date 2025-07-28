interface FileSystem {
    readFile(
        path: string,
        format: string,
        callback: (error: Error | null, contents?: any) => void
    ): void;
}

class FS_Proxy {
    private fs: FileSystem;
    constructor(fs_subject: FileSystem) {
        this.fs = fs_subject;
    }

    readFile(path, format, callback) {

        if (!path.match(/.md$|.MD$/)) {
            return callback(new Error(`Can only read Markdown files.`));
        }

        this.fs.readFile(path, format, (error, contents) => {

            if (error) {
                console.error(error);
                return callback(error);
            }

            return callback(null, contents);

        })

    }

}

export default FS_Proxy;
