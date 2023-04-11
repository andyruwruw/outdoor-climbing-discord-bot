// Packages
import {
  ApplicationCommandOptionData,
  ApplicationCommandSubCommandData,
  ApplicationCommandSubGroupData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { ChatCommand } from '../generic/chat-command';
import { CragHref } from '../generic/options';
import api from '../../api';

/**
 * Forecast related commands.
 */
export class ForecastCommand extends ChatCommand {
  /**
   * The Command's key.
   */
  static key: string = 'forecast';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    if (!interaction || !interaction.options.data.length) {
      return;
    }

    console.log('handling forecast command');

    const crag = interaction.options.data[0].value as string;

    const areaData = await api.mountainProject.getMountainProjectArea(crag);

    if (!(areaData && 'coords' in areaData && areaData.coords && 'lat' in areaData.coords)) {
      return;
    }

    const weather = await api.weather.getWeather(areaData.coords.long, areaData.coords.lat);
    const message = JSON.stringify(weather);

    interaction.reply({
      content: message,
    });
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Retrieves a forecast for a crag.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return ForecastCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[]} Options of the Command.
   */
  getOptions(): Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[] {
    return [
      CragHref.create(),
    ] as Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[];
  }
}
