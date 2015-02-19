clear all; close all

f = @(t) 3*cos(t) + sin(t) + 0.4*sin(30*t)
ezplot(f)
%pause
tilde_f = @(t) 3*cos(t) + sin(t)
figure; ezplot(tilde_f)


pause


sfreq = 44100;                      % samplingsfrekvens (Hz)
sek = 4.0;                          % tid (sek)
n = sfreq * sek;                    % antall samples
s = (1:n) / sfreq;                  

s = sin(1000 * s) ...               % lydsignal
    + 3*cos(1000*s) ...
    + 0.4*sin(30*1000*s);   

sound(s, sfreq);                    % spill av

pause

s = (1:n) / sfreq;  

s = sin(1000 * s) + 3*cos(1000*s);

sound(s, sfreq)