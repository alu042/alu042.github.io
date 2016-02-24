clear all; close all; clc

sfreq = 44100;                      % samplingsfrekvens (Hz)
sek = 4.0;                          % tid (sek)
n = sfreq * sek;                    % antall samples
s = (1:n) / sfreq;                  

s = sin(1000 * s) ...               % lydsignal
    + 3*cos(1000*s) ...
%    + 0.4*sin(30*1000*s);          % støy kan kommenteres vekk

sound(s, sfreq);                    % spill av
audiowrite('signal.ogg',s,sfreq)    % lagre
