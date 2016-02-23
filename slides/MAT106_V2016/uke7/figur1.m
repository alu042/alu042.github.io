clear all; close all; clc

t = linspace(-5, 5, 1000);

f = sin(t) + 3*cos(2*t) + 0.4*sin(30*t);
ftilde = sin(t) + 3*cos(2*t);

figure(1), subplot(2,1,1), plot(t,f), ...
    title('sin(t) + 3*cos(2*t) + 0.4*sin(30*t)'), axis([-5 5 -6 4])
pause
subplot(2,1,2), plot(t,ftilde), title('sin(t) + 3*cos(2*t)'), ...
    axis([-5 5 -6 4])