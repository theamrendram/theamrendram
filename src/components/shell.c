#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>

#define MAX_INPUT 1024
#define MAX_ARGS 10

int main() {
    char input[MAX_INPUT];
    char *args[MAX_ARGS];
    
    while (1) {
        printf("shell> ");
        if (fgets(input, MAX_INPUT, stdin) == NULL) {
            perror("fgets failed");
            break;
        }
        input[strcspn(input, "\n")] = 0; // Remove newline
        
        // Parse input
        int i = 0;
        args[i] = strtok(input, " ");
        while (args[i] != NULL && i < MAX_ARGS - 1) {
            args[++i] = strtok(NULL, " ");
        }
        args[i] = NULL;
        
        // Built-in command: exit
        if (args[0] && strcmp(args[0], "exit") == 0) {
            break;
        }
        
        // Fork and execute
        pid_t pid = fork();
        if (pid == 0) {
            // Child
            execvp(args[0], args);
            perror("execvp failed");
            exit(1);
        } else if (pid > 0) {
            // Parent
            waitpid(pid, NULL, 0);
        } else {
            perror("fork failed");
        }
    }
    return 0;
}
