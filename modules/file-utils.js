export class FileUtils {
    /**
     * 
     * @param {File} file error if null
     * @returns {string} the content text
     */
    static async readFileAsText(file) {
        if (file == null) {
            throw new Error("File not found");
        }

        // sync file read
        // https://stackoverflow.com/a/46568146
        return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }

    /**
     * 
     * @param {string} text 
     * @param {string} filename 
     */
    static saveFile(text, filename) {
        // javascript doesn't have file writer
        // refer: https://zenn.dev/taksnr/articles/0f83ba3290706e
        const blob = new Blob([text], { type: "text/plain" });
        const blobUrl = window.URL.createObjectURL(blob);

        // create link to download
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        link.click();

        // delete the objects
        link.remove();
        window.URL.revokeObjectURL(blobUrl);
    }
}