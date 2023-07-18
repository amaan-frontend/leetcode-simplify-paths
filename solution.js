/**
 * @param {string} path
  * @return {string}
   */
var simplifyPath = function (path) {
    const directories = [];
    const paths = path.split('/');

    for (const dir of paths) {
        if (dir === '' || dir === '.') {
            continue; // Ignore empty directories and current directory "."
        }
        if (dir === '..') {
            if (directories.length > 0) {
                directories.pop(); // Go back to the parent directory ".."
            }
        } else {
            directories.push(dir); // Push valid directory to the stack
        }
    }

    if (directories.length === 0) {
        return '/'; // If the stack is empty, return the root directory "/"
    }

    return '/' + directories.join('/');
}; 
